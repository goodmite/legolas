import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {NbDialogService, NbThemeService} from '@nebular/theme';
import {finalize, takeWhile} from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import {Router} from "@angular/router";
import {INode} from "../../../interfaces/node";
import {NodeService} from "./node.service";
import {Select, Store} from "@ngxs/store";
import {AddNode, DeleteNode, SetNodeList} from "./ngxs/actions";
import {Observable} from "rxjs";
import {IEnvironmentState} from "./environment/ngxs/state";
import {IEnvironment} from "../../../interfaces/environment";
import {INodeState} from "./ngxs/state";
import {SharedRouterService} from "../../shared-router.service";

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{

  constructor(private themeService: NbThemeService,
              private dialogService: NbDialogService,
              private router: Router,
              private store: Store,
              private nodeService: NodeService,
              private solarService: SolarData) {
  }

  environments: IEnvironment[];
  nodes: INode[];
  node_type = 'script';
  @Select() environments$: Observable<IEnvironmentState>;
  @Select() nodes$: Observable<INodeState>;

  ngOnInit(): void {
    this.environments$.subscribe((state)=>{
      this.environments = state.list;
    });
    this.nodes$.subscribe((state)=>{
      if(!state){
        return;
      }
      this.nodes = state.list;
    })
    this.nodeService.getAllNodes()
      .subscribe((nodes:INode[])=>{
        this.store.dispatch(new SetNodeList({ nodes}))
      })
  }

  open2(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {context: 'this is some additional data passed to dialog'});
  }


  goToNodePage(node: INode){
    this.router.navigate(['pages/node'], {queryParams:{id: node._id}});
  }

  createNodeHandler(nodeData:INode, ref){

    ref.close();
    let random = Date.now();
    SharedRouterService.data[random] = nodeData;
    this.router.navigate(['pages/node'], {queryParams:{did:random}});
    // this.nodeService.createNode(nodeData)
    //   .pipe(finalize(()=>{
    //     ref.close()
    //   }))
    //   .subscribe((node:INode)=>{
    //     this.store.dispatch(new AddNode({node}))
    //   })
  }

  deleteNodeHandler(node){
    this.nodeService.deleteNode(node)
      .subscribe(()=>{
        this.store.dispatch(new DeleteNode({node}))
      })
  }
}
