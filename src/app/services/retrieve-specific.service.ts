import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetrieveSpecificService {

  constructor(private http: HttpClient) { }

  getSpecific(data:any)
  {
    //console.log(data);
    return this.http.post("api/getSpecific",data).toPromise().then(response => {
      //console.log(response);
      return response;
    });
  }

}
