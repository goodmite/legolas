import {IApplication} from "../../../../interfaces/application";


export class AddApplication {
  static readonly type = '[Application] add Application';
  constructor(public payload: {application: IApplication }) {}
}

export class UpdateApplication {
  static readonly type = '[Application] update Application';
  constructor(public payload: {application: IApplication }) {}
}

export class SetApplicationList {
  static readonly type = '[Application] add Application List';
  constructor(public payload: {applications: IApplication[] }) {}
}

export class DeleteApplication {
  static readonly type = '[Application] delete Application';
  constructor(public payload: {application: IApplication }) {}
}

export class ResetApplicationState {
  static readonly type = '[Application] reset Application';
}
