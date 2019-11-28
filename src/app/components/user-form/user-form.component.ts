import { Component, OnInit,Input } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar';
import {SendDataService} from '../../services/send-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() display: any;
  chosenMode: any;
  showComments: boolean;
  videoForm = this.fb.group({
    videoId:['', Validators.required],
    trendingDate:['', Validators.required],
    title:['', Validators.required],
    channelTitle:['', Validators.required],
    category:['', Validators.required],
    publishTime:['',Validators.required],
    tags:['', Validators.required],
    views:['', Validators.required],
    likes:['', Validators.required],
    dislikes:['', Validators.required],
    numComments:['', Validators.required],
    thumbnail:['', Validators.required],
    comDisabled:['', Validators.required],
    ratDisabled:['', Validators.required],
    videoError:['', Validators.required],
    desc:['', Validators.required],
  });
  categories=["Film & Animation","Autos & Vehicles","Music",
  "Pets & Animals","Sports","Short Movies","Travel & Events",
  "Gaming","Videoblogging","People & Blogs","Comedy",
  "Entertainment","News & Politics","Howto & Style","Education",
  "Science & Technology","Movies","Anime & Animation",
  "Action/Adventure","Classics","Funny","Documentary","Drama",
  "Family","Foreign","Horror","Sci-Fi/Fantasy","Thriller",
  "Shorts","Shows","Trailers"];
  catIds={"Film & Animation":1,"Autos & Vehicles":2,"Music":10,
  "Pets & Animals":15,"Sports":17,"Short Movies":18,"Travel & Events":19,
  "Gaming":20,"Videoblogging":21,"People & Blogs":22,"Comedy":23,
  "Entertainment":24,"News & Politics":25,"Howto & Style":26,"Education":27,
  "Science & Technology":28,"Movies":30,"Anime & Animation":31,
  "Action/Adventure":32,"Classics":33,"Funny":34,"Documentary":35,"Drama":36,
  "Family":37,"Foreign":38,"Horror":39,"Sci-Fi/Fantasy":40,"Thriller":41,
  "Shorts":42,"Shows":43,"Trailers":44};
  types=["True","False"];
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, 
    private sendData: SendDataService, private router: Router) 
  { 

  }

  ngOnInit() {
  }


  onSubmit(){
    console.log(this.videoForm.value);
    if(this.videoForm.invalid)
    {
      this.snackBar.open("Please enter all required fields",null, {
        duration: 6000,
        panelClass: ['red-snackbar']
      });
    }
    else
    {
      this.sendData.sendData(this.videoForm.value,0).then(response=>{
        this.snackBar.open("Video details have been successfully submitted",null, {
          duration: 6000,
          panelClass: ['green-snackbar']
        });
        this.router.navigate(['welcome']);
      })
      
    }
  }


  get videoId(){return this.videoForm.get('videoId');}
  get trendingDate(){return this.videoForm.get('trendingDate');}
  get title(){return this.videoForm.get('title');}
  get channelTitle(){return this.videoForm.get('channelTitle');}
  get category(){return this.videoForm.get('category');}
  get publishTime(){return this.videoForm.get('publishTime');}
  get tags(){return this.videoForm.get('tags');}
  get views(){return this.videoForm.get('views');}
  get likes(){return this.videoForm.get('likes');}
  get dislikes(){return this.videoForm.get('dislikes');}
  get numComments(){return this.videoForm.get('numComments');}
  get thumbnail(){return this.videoForm.get('thumbnail');}
  get comDisabled(){return this.videoForm.get('comDisabled');}
  get ratDisabled(){return this.videoForm.get('ratDisabled');}
  get videoError(){return this.videoForm.get('videoError');}
  get desc(){return this.videoForm.get('desc');}
}
