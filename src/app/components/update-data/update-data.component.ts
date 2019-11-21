import { Component, OnInit,Input } from '@angular/core';
import { GetDataService } from './../../services/get-data.service';
import { FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, 
     private router: Router) { }

  idForm = this.fb.group({
    videoId:['',Validators.required]
  });

  ngOnInit() {
  }

  get videoId(){return this.idForm.get('videoId');}

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
      this.router.navigate(['update', this.idForm.value.videoId]);
    }
  }

}
