import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IEnvironment} from "../../../../../interfaces/environment";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {IEnvironmentState} from "../ngxs/state";
import {FormGroup} from "@angular/forms";
import {EnvironmentService} from "../environment.service";
import {AddEnvironment, UpdateEnvironment} from "../ngxs/actions";

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
    this.environments$.subscribe((state)=>{
      if(!state) return;
      this.environment = state.list.find(env => env._id === this.id);
      this.environmentForm.patchValue(this.environment);
    });
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
          this.store.dispatch(new AddEnvironment({environment: data}))
        })
    }
  }

}
