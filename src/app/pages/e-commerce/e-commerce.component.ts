import {Component, TemplateRef} from '@angular/core';
import {NbDialogService} from "@nebular/theme";

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss'],
})
export class ECommerceComponent {

  constructor(private dialogService: NbDialogService) {}
  open2(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      { context: 'this is some additional data passed to dialog' });
  }

  createNewAppHandler(formData:{name:string}){
    alert();
  }
}
