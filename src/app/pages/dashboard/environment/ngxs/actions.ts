import {IEnvironment} from "../../../../../interfaces/environment";

export class AddEnvironment {
  static readonly type = '[Environment] add Environment';
  constructor(public payload: {environment: IEnvironment }) {}
}

export class UpdateEnvironment {
  static readonly type = '[Environment] update Environment';
  constructor(public payload: {environment: IEnvironment }) {}
}

export class SetEnvironmentList {
  static readonly type = '[Environment] add Environment List';
  constructor(public payload: {environments: IEnvironment[] }) {}
}
//
export class DeleteEnvironment {
  static readonly type = '[Environment] delete Environment';
  constructor(public payload: {environment: IEnvironment }) {}
}

export class ResetEnvironmentState {
  static readonly type = '[Environment] reset Environment';
}
