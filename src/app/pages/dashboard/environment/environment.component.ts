import {Component, OnInit, TemplateRef} from '@angular/core';
import {NbDialogService} from "@nebular/theme";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss']
})
export class EnvironmentComponent implements OnInit {

  constructor(private dialogService: NbDialogService, private router: Router) {}

  ngOnInit() {
  }

  open2(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {context: 'this is some additional data passed to dialog'});
  }

  goToEvnDetailPage(){
    this.router.navigate(['/pages/env-list']);
  }

}
