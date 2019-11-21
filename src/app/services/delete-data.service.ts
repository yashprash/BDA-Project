import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteDataService {

  constructor(private http:HttpClient) { }

  deleteSpecific(data:any){
    //console.log(data);
    return this.http.post("api/delete",data).toPromise().then(response => {
      //console.log(response);
      return response;
    });
  }
}
