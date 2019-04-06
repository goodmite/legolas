import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IEnvironment} from "../../../../../interfaces/environment";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {IEnvironmentState} from "../ngxs/state";
import {FormGroup} from "@angular/forms";
import {EnvironmentService} from "../environment.service";
import {AddEnvironment, UpdateEnvironment} from "../ngxs/actions";
import {SharedRouterService} from "../../../../shared-router.service";

@Component({
  selector: 'ngx-environment-detail',
  templateUrl: './environment-detail.component.html',
  styleUrls: ['./environment-detail.component.scss']
})
export class EnvironmentDetailComponent implements OnInit {

  environment: IEnvironment;
  id:string;
  environmentForm:FormGroup = this.environmentService.createEnvironmentForm();
  @Select() environments$: Observable<IEnvironmentState>;
  constructor(private router:Router,
              private activatedRoute: ActivatedRoute,
              private store: Store,
              private environmentService:EnvironmentService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
    let did = this.activatedRoute.snapshot.queryParamMap.get('did');
    if(did){
      this.environment = SharedRouterService.data[did];
    }


    this.environments$.subscribe((state)=>{
      if(!state) return;
      let env = state.list.find(env => env._id === this.id);
      if(env){
        this.environment = env;
        this.environmentForm.patchValue(this.environment);
      }
    });
    this.environmentForm.patchValue(this.environment);
  }

  cancel(){
    this.router.navigate(['/pages/env']);
  }

  saveOrUpdate(environment: IEnvironment){
    let updatedEnv = {...(this.environment||{}), ...environment};
    if(this.id){
      this.environmentService.updateEnvironment(updatedEnv)
        .subscribe((data)=>{
          this.store.dispatch(new UpdateEnvironment({environment: data}))
        })
    }else {
      this.environmentService.createEnvironment(updatedEnv)
        .subscribe((data)=>{
          this.id = data._id;
          this.store.dispatch(new AddEnvironment({environment: data}));
          this.router.navigate(['/pages/env-list'],{queryParams:{id:data._id}})
        })
    }
  }

}
