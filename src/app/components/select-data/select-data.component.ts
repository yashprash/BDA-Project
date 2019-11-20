import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../../services/get-data.service';

@Component({
  selector: 'app-select-data',
  templateUrl: './select-data.component.html',
  styleUrls: ['./select-data.component.css']
})
export class SelectDataComponent implements OnInit {

  videoData: string[];
  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.getData.getData().then(response=>{
      console.log(response);
      this.videoData=response as string[];
    })

  }

}
