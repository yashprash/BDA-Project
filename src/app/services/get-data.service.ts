import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {   }
  getData()
  {
    //console.log(data);
    return this.http.get("api/select").toPromise().then(response => {
      //console.log(response);
      return response;
    });
  }
}
