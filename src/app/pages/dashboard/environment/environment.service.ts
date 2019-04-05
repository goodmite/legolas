import {Injectable} from '@angular/core';
import {ServerService} from "../../../server.service";
import {UrlService} from "../../../url.service";
import {IEnvironment} from "../../../../interfaces/environment";
import {FormBuilder} from "@angular/forms";

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
      docker_file: [],
      "desired_count": [],
      "min_server_count": [],
      "max_server_count": [],
      "vcpu": [],
      "memory": [],
      "description": []
    })
  }

}
