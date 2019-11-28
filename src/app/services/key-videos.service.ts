import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeyVideosService {

  constructor(private http: HttpClient) { }

  getData(data:any)
  {
    return this.http.post("api/search",data).toPromise().then(response => {
      //console.log(response);
      return response;
    });
  }
}
