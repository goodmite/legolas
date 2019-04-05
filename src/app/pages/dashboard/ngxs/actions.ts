import {INode} from "../../../../interfaces/node";


export class AddNode {
  static readonly type = '[Node] add Node';
  constructor(public payload: {node: INode }) {}
}

export class UpdateNode {
  static readonly type = '[Node] update Node';
  constructor(public payload: {node: INode }) {}
}

export class SetNodeList {
  static readonly type = '[Node] add Node List';
  constructor(public payload: {nodes: INode[] }) {}
}

export class DeleteNode {
  static readonly type = '[Node] delete Node';
  constructor(public payload: {node: INode }) {}
}

export class ResetNodeState {
  static readonly type = '[Node] reset Node';
}
