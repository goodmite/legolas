import { Injectable } from '@angular/core';
import {ServerService} from "../../server.service";
import {UrlService} from "../../url.service";
import {INode} from "../../../interfaces/node";


@Injectable({
  providedIn: 'root'
})
export class NodeService {/*A facade service store slice*/

  constructor(private serverService:ServerService, private urlService:UrlService){}

  createNode(env:INode){
    let url = UrlService.createNodeUrl();
    return this.serverService.makePostReq({url, body: env});
  }

  getAllNodes(){
    let url = UrlService.getAllNodesUrl();
    return this.serverService.makeGetReq({url})
  }

  getNode(id){
    let url = UrlService.getNodeByIdUrl(id);
    return this.serverService.makeGetReq({url})
  }

  updateNode(node:INode){
    let url = UrlService.updateNodeUrl(node._id);
    return this.serverService.makePutReq({url, body: node});
  }

  deleteNode(node:INode){
    let url = UrlService.deleteNodeUrl(node._id);
    return this.serverService.makeDeleteReq({url});
  }

}
