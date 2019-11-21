import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  constructor(private http: HttpClient) {   }
  sendData(data:any,type:number)
  {
    //console.log(data);
    if(type==0)
      return this.http.post("api/insert",data).toPromise().then(response => {
        //console.log(response);
        return response;
      });
    
    else if(type==1)
      return this.http.post("api/update",data).toPromise().then(response => {
        //console.log(response);
        return response;
      });
  }
}
