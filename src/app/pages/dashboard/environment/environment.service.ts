import {Injectable} from '@angular/core';
import {ServerService} from "../../../server.service";
import {UrlService} from "../../../url.service";
import {IEnvironment} from "../../../../interfaces/environment";
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {/*A facade service store slice*/

  constructor(private serverService: ServerService,
              private formBuilder: FormBuilder,
              private urlService: UrlService) {
  }

  createEnvironment(env: IEnvironment) {
    let url = UrlService.createEnvironmentUrl();
    return this.serverService.makePostReq({url, body: env});
  }

  getAllEnvironments() {
    let url = UrlService.getAllEnvironmentsUrl();
    return this.serverService.makeGetReq({url})
  }

  getEnvironment(id) {
    let url = UrlService.getEnvironmentByIdUrl(id);
    return this.serverService.makeGetReq({url})
  }

  updateEnvironment(env: IEnvironment) {
    let url = UrlService.updateEnvironmentUrl(env._id);
    return this.serverService.makePutReq({url, body: env});
  }

  deleteEnvironment(id) {
    let url = UrlService.deleteEnvironmentUrl(id);
    return this.serverService.makeDeleteReq({url});
  }

  /*environment detail form*/
  createEnvironmentForm() {
    return this.formBuilder.group({
      name: ["", Validators.required],
      docker_file: [],
      "desired_count": [1, Validators.required],
      "is_test": [true],
      "min_server_count": [1, Validators.required],
      "max_server_count": [1, Validators.required],
      "vcpu": [1, Validators.required],
      "memory": [1, Validators.required],
      "description": ['This is description']
    })
  }

}
