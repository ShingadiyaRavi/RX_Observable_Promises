import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  sampleData = {
    id:1,
    name:'Shingadiya Ravi',
    city:'Rajkot'
  }




  // This method is used for the observable...
  getDataByObservable():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  // This method is used for the promise...
  getDataByPromise(){
    // return this.sampleData;
    return this.http.get(this.apiUrl);
  }

}
