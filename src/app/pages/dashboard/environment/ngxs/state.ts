
import { Action, State, StateContext } from '@ngxs/store';
import {
  AddEnvironment, DeleteEnvironment,
  SetEnvironmentList,
  UpdateEnvironment,
} from "./actions";
import {IEnvironment} from "../../../../../interfaces/environment";
import {ResetAuthToDefaultState} from "../../../../@auth/ngxs/actions";
//

export interface IEnvironmentState {
  list: IEnvironment[];
}
const initialState: IEnvironmentState = {
  list: []
};

@State<IEnvironmentState>({
  name: 'environments',
  defaults: initialState
})

// same as reducer
export class EnvironmentStateReducer {

  @Action(AddEnvironment)
  setUser({patchState, setState, getState, dispatch}: StateContext<IEnvironmentState>, {payload}: AddEnvironment) {
    let state = getState();
    let list = state.list;
    // let index = list.findIndex(item=>item._id === payload.environment._id);
    list = [...list, payload.environment];
    patchState({list});
  }

  @Action(UpdateEnvironment)
  updateEnvironment({patchState, setState, getState, dispatch}: StateContext<IEnvironmentState>, {payload}: UpdateEnvironment) {
    let state = getState();
    let list = state.list;
    let index = list.findIndex(item=>item._id === payload.environment._id);
    list[index] = {...list[index], ...payload.environment};
    patchState({list});
  }

  @Action(SetEnvironmentList)
  setEnvironmentList({patchState, setState, getState, dispatch}: StateContext<IEnvironmentState>, {payload}: SetEnvironmentList) {
    debugger;
    patchState({list: payload.environments});
  }

  @Action(DeleteEnvironment)
  deleteEnvironment({patchState, setState, getState, dispatch}: StateContext<IEnvironmentState>, {payload}: DeleteEnvironment) {
    let state = getState();
    let list = state.list;
    let index = list.findIndex(item=>item._id === payload.environment._id);
    list.splice(index, 1);
    patchState({list});
  }

  @Action(ResetAuthToDefaultState)
  resetAuthToDefaultState({ patchState, setState, getState, dispatch }: StateContext<IEnvironmentState>) {
    setState(initialState);
  }

}
