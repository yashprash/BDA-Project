import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RetrieveSpecificService } from '../../services/retrieve-specific.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SendDataService } from '../../services/send-data.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-update-specific',
  templateUrl: './update-specific.component.html',
  styleUrls: ['./update-specific.component.css']
})
export class UpdateSpecificComponent implements OnInit {

  video: any[];
  videoForm;
  categ={1:"Film & Animation",2:"Autos & Vehicles",10:"Music",
  15:"Pets & Animals",17:"Sports",18:"Short Movies",19:"Travel & Events",
  20:"Gaming",21:"Videoblogging",22:"People & Blogs",23:"Comedy",
  24:"Entertainment",25:"News & Politics",26:"Howto & Style",27:"Education",
  28:"Science & Technology",30:"Movies",31:"Anime & Animation",
  32:"Action/Adventure",33:"Classics",34:"Funny",35:"Documentary",36:"Drama",
  37:"Family",38:"Foreign",39:"Horror",40:"Sci-Fi/Fantasy",41:"Thriller",
  42:"Shorts",43:"Shows",44:"Trailers"};

  constructor(private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder, private retData: RetrieveSpecificService,
    private snackBar: MatSnackBar, private sendData: SendDataService) { 
    this.id = this.route.snapshot.params.id;
    //this.video = this.route.snapshot.data.data;
    this.retData.getSpecific({videoId:this.id}).then(response=>{
      console.log(response);
        this.video=response as any[]; 
      if(this.video.length!=0)
      {
        this.display=true;
        this.formInit();
      }
      else
      {
        this.display=false;
      }
    });
    }

  id: any;
  display: boolean;

  selectedCat: any;
  com: boolean;
  rat: boolean;
  err: boolean;
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

  ngOnInit() {
  }

  back(){
    this.router.navigate(['welcome']);
  }

  formInit(){
    console.log("In Form Init");
    this.videoForm = this.fb.group({
      videoId:[this.video[0].videoId],
      trendingDate:[this.video[0].trendingDate, Validators.required],
      title:[this.video[0].title, Validators.required],
      channelTitle:[this.video[0].channelTitle, Validators.required],
      category:['', Validators.required],
      publishTime:[this.video[0].publishTime,Validators.required],
      tags:[this.video[0].tags, Validators.required],
      views:[this.video[0].views, Validators.required],
      likes:[this.video[0].likes, Validators.required],
      dislikes:[this.video[0].dislikes, Validators.required],
      numComments:[this.video[0].numComments, Validators.required],
      thumbnail:[this.video[0].thumbnail, Validators.required],
      comDisabled:[this.video[0].comDisabled, Validators.required],
      ratDisabled:[this.video[0].ratDisabled, Validators.required],
      videoError:[this.video[0].videoError, Validators.required],
      desc:[this.video[0].desc, Validators.required],
    });
    this.selectedCat=this.categ[+this.video[0].category];
    this.com=this.video[0].comDisabled;
    this.rat=this.video[0].ratDisabled;
    this.err=this.video[0].videoError;
    //console.log(this.selectedCat)
  }

  onSubmit(){
    console.log(this.videoForm.value);
    if(this.videoForm.invalid)
    {
      this.snackBar.open("Please enter all required fields",null, {
        duration: 10000,
        panelClass: ['red-snackbar']
      });
    }
    else
    {
      this.sendData.sendData(this.videoForm.value,1).then(response=>{
        this.snackBar.open("Video details have been successfully updated",null, {
          duration: 10000,
          panelClass: ['green-snackbar']
        });
        this.router.navigate(['welcome']);
      })
    }
  }

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
