import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  constructor(private http: HttpClient) {   }
  sendData(data:any)
  {
    //console.log(data);
    return this.http.post("api/insert",data).toPromise().then(response => {
      //console.log(response);
      return response;
    });
  }
}
