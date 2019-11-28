import { Component, OnInit,Input } from '@angular/core';
import { GetDataService } from './../../services/get-data.service';
import { FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-data',
  templateUrl: './select-data.component.html',
  styleUrls: ['./select-data.component.css']
})
export class SelectDataComponent implements OnInit {

  videoData: any[];

  categories={1:"Film & Animation",2:"Autos & Vehicles",10:"Music",
  15:"Pets & Animals",17:"Sports",18:"Short Movies",19:"Travel & Events",
  20:"Gaming",21:"Videoblogging",22:"People & Blogs",23:"Comedy",
  24:"Entertainment",25:"News & Politics",26:"Howto & Style",27:"Education",
  28:"Science & Technology",30:"Movies",31:"Anime & Animation",
  32:"Action/Adventure",33:"Classics",34:"Funny",35:"Documentary",36:"Drama",
  37:"Family",38:"Foreign",39:"Horror",40:"Sci-Fi/Fantasy",41:"Thriller",
  42:"Shorts",43:"Shows",44:"Trailers"};

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, 
    private getData: GetDataService, private router: Router) { }
  idForm = this.fb.group({
    videoId:['',Validators.required]
  });

  keyForm = this.fb.group({
    videoKey:['',Validators.required]
  });

  ngOnInit() {
    this.getData.getData().then(response=>{
      console.log(response);
      this.videoData=response as any[];
    })
  }

  get videoId(){return this.idForm.get('videoId');}
  get videoKey(){return this.keyForm.get('videoKey');}

  onSubmit(){
    if(this.idForm.invalid)
    {
      this.snackBar.open("Please enter all required fields",null, {
        duration: 5000,
        panelClass: ['red-snackbar']
      });
    }
    else
    {
      this.router.navigate(['select', this.idForm.value.videoId]);
    }
  }

  onSubmitSearch()
  {
    if(this.keyForm.invalid)
    {
      this.snackBar.open("Please enter all required fields",null, {
        duration: 5000,
        panelClass: ['red-snackbar']
      });
    }
    else
    {
      this.router.navigate(['search', this.keyForm.value.videoKey]);
    }
  }

}
