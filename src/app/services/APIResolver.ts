import { Injectable } from '@angular/core';

import { Resolve, ActivatedRoute } from '@angular/router';
import { RetrieveSpecificService } from '../services/retrieve-specific.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class APIResolver implements Resolve<any> {
    id:any;
  constructor(private route: ActivatedRoute, private retData: RetrieveSpecificService) {
    this.id = this.route.snapshot.params.id;
  }

  resolve() {
    return this.retData.getSpecific({videoId:this.id}).then(response=>{
        return response;
      });
  }
}