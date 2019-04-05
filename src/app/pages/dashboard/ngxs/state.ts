
import { Action, State, StateContext } from '@ngxs/store';
import {
  AddNode, DeleteNode, ResetNodeState,
  SetNodeList,
  UpdateNode,
} from "./actions";
import {INode} from "../../../../interfaces/node";


export interface INodeState {
  list: INode[];
}
const initialState: INodeState = {
  list: []
};

@State<INodeState>({
  name: 'nodes',
  defaults: initialState
})

// same as reducer
export class NodeStateReducer {

  @Action(AddNode)
  setUser({patchState, setState, getState, dispatch}: StateContext<INodeState>, {payload}: AddNode) {
    let state = getState();
    let list = state.list;
    list = [...list, payload.node];
    patchState({list});
  }

  @Action(UpdateNode)
  updateNode({patchState, setState, getState, dispatch}: StateContext<INodeState>, {payload}: UpdateNode) {
    let state = getState();
    let list = state.list;
    let index = list.findIndex(item=>item._id === payload.node._id);
    list[index] = {...list[index], ...payload.node};
    patchState({list});
  }

  @Action(SetNodeList)
  SetNodeList({patchState, setState, getState, dispatch}: StateContext<INodeState>, {payload}: SetNodeList) {
    patchState({list: payload.nodes});
  }

  @Action(DeleteNode)
  deleteNode({patchState, setState, getState, dispatch}: StateContext<INodeState>, {payload}: DeleteNode) {
    let state = getState();
    let list = state.list;
    let index = list.findIndex(item=>item._id === payload.node._id);
    list.splice(index, 1);
    patchState({list});
  }

  @Action(ResetNodeState)
  resetAuthToDefaultState({ patchState, setState, getState, dispatch }: StateContext<INodeState>) {
    setState(initialState);
  }

}
