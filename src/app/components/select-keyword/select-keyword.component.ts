import { Component, OnInit } from '@angular/core';
import { KeyVideosService } from '../../services/key-videos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-keyword',
  templateUrl: './select-keyword.component.html',
  styleUrls: ['./select-keyword.component.css']
})
export class SelectKeywordComponent implements OnInit {

  videos: any; 
  display: boolean;
  key: String;

  categories={1:"Film & Animation",2:"Autos & Vehicles",10:"Music",
  15:"Pets & Animals",17:"Sports",18:"Short Movies",19:"Travel & Events",
  20:"Gaming",21:"Videoblogging",22:"People & Blogs",23:"Comedy",
  24:"Entertainment",25:"News & Politics",26:"Howto & Style",27:"Education",
  28:"Science & Technology",30:"Movies",31:"Anime & Animation",
  32:"Action/Adventure",33:"Classics",34:"Funny",35:"Documentary",36:"Drama",
  37:"Family",38:"Foreign",39:"Horror",40:"Sci-Fi/Fantasy",41:"Thriller",
  42:"Shorts",43:"Shows",44:"Trailers"};
  
  constructor(private keyVideos: KeyVideosService, 
    private activatedRoute: ActivatedRoute, private router: Router) { 
    this.key = this.activatedRoute.snapshot.params.id.toString();
  }

  ngOnInit() {
    this.keyVideos.getData({videoKey:this.key}).then(response=>{
      console.log(response);
        this.videos=response as any[]; 
      if(this.videos.length!=0)
      {
        this.display=true;
      }
      else
      {
        this.display=false;
      }
    });
  }

  back(){
    this.router.navigate(['welcome']);
  }

}
