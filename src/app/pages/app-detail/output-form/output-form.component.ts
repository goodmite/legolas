import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-output-form',
  templateUrl: './output-form.component.html',
  styleUrls: ['./output-form.component.scss']
})
export class OutputFormComponent implements OnInit {

  @Output() openTestModal$ = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
