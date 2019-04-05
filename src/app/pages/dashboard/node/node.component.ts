import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {INodeState} from "../ngxs/state";
import {INode} from "../../../../interfaces/node";
import {SetNodeList} from "../ngxs/actions";
import {NbDialogService, NbThemeService} from "@nebular/theme";
import {ActivatedRoute, Router} from "@angular/router";
import {NodeService} from "../node.service";
import {SolarData} from "../../../@core/data/solar";

@Component({
  selector: 'ngx-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Select() nodes$: Observable<INodeState>;
  node:INode;
  id:string;
  constructor(private themeService: NbThemeService,
              private dialogService: NbDialogService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store,
              private nodeService: NodeService) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.nodes$.subscribe((state)=>{
      this.node = state.list.find((node)=>node._id === this.id);
    });
  }


}
