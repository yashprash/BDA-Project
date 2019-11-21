import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DeleteDataService } from '../../services/delete-data.service';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {

  res: any;
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar,
    private router: Router, private deleteData:DeleteDataService) { }

  ngOnInit() {
  }

  idForm = this.fb.group({
    videoId:['',Validators.required]
  });

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
      this.deleteData.deleteSpecific(this.idForm.value).then(response=>{
        this.res=response as any;
        if(this.res.success==true)
        {
          this.snackBar.open("Video details have been deleted",null, {
            duration: 10000,
            panelClass: ['green-snackbar']
          });
        }
        else if(this.res.success==false)
        {
          this.snackBar.open("Sorry, no such video in the database!",null, {
            duration: 10000,
            panelClass: ['red-snackbar']
          });
        }
      })
    }
  }
  back(){
    this.router.navigate(['welcome']);
  }
}
