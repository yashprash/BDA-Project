import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Router module imports
import { RouterModule,Routes } from '@angular/router';
//Form modules imports
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
//Http Client Module import
import {HttpClientModule} from '@angular/common/http';
//Angular material import 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Components import
import { UserFormComponent } from './components/user-form/user-form.component';

import { SendDataService } from './services/send-data.service';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateDataComponent } from './components/update-data/update-data.component';
import { SelectDataComponent } from './components/select-data/select-data.component';
import { DeleteDataComponent } from './components/delete-data/delete-data.component';
import { MainContainerComponent } from './components/main-container/main-container.component';



@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UpdateDataComponent,
    SelectDataComponent,
    DeleteDataComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule
  ],
  exports: [
    MatInputModule,
    MatTabsModule
  ],
  providers: [SendDataService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
