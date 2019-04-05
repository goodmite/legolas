import {Component, OnInit, TemplateRef} from '@angular/core';
import {NbDialogService} from "@nebular/theme";
import {Router} from "@angular/router";
import {EnvironmentService} from "./environment.service";
import {IEnvironment} from "../../../../interfaces/environment";
import {Select, Store} from "@ngxs/store";
import {AddEnvironment, DeleteEnvironment, SetEnvironmentList} from "./ngxs/actions";
import {Observable} from "rxjs";
import {IAuthState} from "../../../@auth/ngxs/state";
import {IEnvironmentState} from "./ngxs/state";

@Component({
  selector: 'ngx-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss']
})
export class EnvironmentComponent implements OnInit {

  environments: IEnvironment[];
  @Select() environments$: Observable<IEnvironmentState>;
  constructor(private dialogService: NbDialogService,
              private router: Router,
              private environmentService:EnvironmentService,
              private store:Store
  ) {}

  ngOnInit() {
    this.environments$.subscribe((state)=>{
      if(!state) return;
      this.environments = state.list;
      console.log(state);
    });
    this.environmentService.getAllEnvironments()
      .subscribe((val)=>{
        this.store.dispatch(new SetEnvironmentList({environments: val}))
      })
  }

  open2(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {context: 'this is some additional data passed to dialog'});
  }

  goToEvnDetailPage(env: IEnvironment){
    this.router.navigate([`/pages/env-list`], { queryParams:{id:env._id}});
  }

  deleteEnv(env: IEnvironment){
    this.environmentService.deleteEnvironment(env._id)
      .subscribe(()=>{
        this.store.dispatch(new DeleteEnvironment({environment:env}))
      })
  }

  createNewEnvHandler(env:IEnvironment){
    debugger;
    this.environmentService.createEnvironment(env)
      .subscribe((envData:IEnvironment)=>{
        this.store.dispatch(new AddEnvironment({environment: envData}));
      })
  }

}
