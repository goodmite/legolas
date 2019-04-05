
import { Action, State, StateContext } from '@ngxs/store';
import {
  AddApplication, DeleteApplication, ResetApplicationState,
  SetApplicationList,
  UpdateApplication,
} from "./actions";
import {IApplication} from "../../../../interfaces/application";


export interface IApplicationState {
  list: IApplication[];
}
const initialState: IApplicationState = {
  list: []
};

@State<IApplicationState>({
  name: 'node',
  defaults: initialState
})

// same as reducer
export class ApplicationStateReducer {

  @Action(AddApplication)
  setUser({patchState, setState, getState, dispatch}: StateContext<IApplicationState>, {payload}: AddApplication) {
    let state = getState();
    let list = state.list;
    list = [...list, payload.application];
    patchState({list});
  }

  @Action(UpdateApplication)
  updateApplication({patchState, setState, getState, dispatch}: StateContext<IApplicationState>, {payload}: UpdateApplication) {
    let state = getState();
    let list = state.list;
    let index = list.findIndex(item=>item._id === payload.application._id);
    list[index] = {...list[index], ...payload.application};
    patchState({list});
  }

  @Action(SetApplicationList)
  SetApplicationList({patchState, setState, getState, dispatch}: StateContext<IApplicationState>, {payload}: SetApplicationList) {
    patchState({list: payload.applications});
  }

  @Action(DeleteApplication)
  deleteApplication({patchState, setState, getState, dispatch}: StateContext<IApplicationState>, {payload}: DeleteApplication) {
    let state = getState();
    let list = state.list;
    let index = list.findIndex(item=>item._id === payload.application._id);
    list.splice(index);
    patchState({list});
  }

  @Action(ResetApplicationState)
  resetAuthToDefaultState({ patchState, setState, getState, dispatch }: StateContext<IApplicationState>) {
    setState(initialState);
  }

}
