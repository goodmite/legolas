
import { Action, State, StateContext } from '@ngxs/store';
import {IUser} from "../../interface";
import {ResetAuthToDefaultState, SetUser} from "./actions";


export interface IAuthState {
  user?: IUser;
}
const initialState: IAuthState = {
  user: null
};

@State<IAuthState>({
  name: 'loggeduser',
  defaults: initialState
})

// same as reducer
export class AuthStateReducer {

  @Action(SetUser)
  setUser({patchState, setState, getState, dispatch}: StateContext<IAuthState>, {payload}: SetUser) {
    patchState({user: payload.user});
  }

  @Action(ResetAuthToDefaultState)
  resetAuthToDefaultState({ patchState, setState, getState, dispatch }: StateContext<IAuthState>) {
    patchState({ user: null });
  }

}
