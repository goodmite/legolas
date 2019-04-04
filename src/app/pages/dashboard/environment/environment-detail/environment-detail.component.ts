import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-environment-detail',
  templateUrl: './environment-detail.component.html',
  styleUrls: ['./environment-detail.component.scss']
})
export class EnvironmentDetailComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  cancel(){
    this.router.navigate(['/pages/env']);
  }

}
