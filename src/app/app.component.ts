import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables';

  constructor(private apiData:GetDataService){}

  // Simple Varibale
  data:any=[];

  // Observable variable. we can identify of this variable on $ sign. $ sign measn it is a observable.
  data$!:Observable<any>;


  ngOnInit(){
    // ::::::: Start Observable :::::

      // Using async pipe
      this.data$ = this.apiData.getDataByObservable();

      // Using Subscribe Method.
      // this.apiData.getData().subscribe(res=>{
      // this.data = res;
      // });
    // :::::: End Observable :::::


    // :::::::: Start Promise :::::::;
      // Promise Object ...
      let promiseData = new Promise((resolve,reject)=>{
        if(this.apiData.sampleData){
          // resolve(this.sampleData);
          resolve(this.apiData.getDataByPromise());
        }else{
          reject("Data Not Getted.");
        }
      });

      // Data get then we what want to do...
      promiseData.then(res=>{
        this.data = res;
        console.log("Promise Resolve Called :",res);
      }).catch(res=>{
        console.log("Promise Reject Called : ",res);
      });
    // ::::::: End Promise ::::::

  }

}
