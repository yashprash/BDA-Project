import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormComponent } from './components/user-form/user-form.component';
import { SelectDataComponent } from './components/select-data/select-data.component';
import { UpdateDataComponent } from './components/update-data/update-data.component';
import { DeleteDataComponent } from './components/delete-data/delete-data.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { SelectSpecificComponent } from './components/select-specific/select-specific.component';
import { UpdateSpecificComponent } from './components/update-specific/update-specific.component';
import { APIResolver } from './services/APIResolver';
import { SelectKeywordComponent } from './components/select-keyword/select-keyword.component';

const appRoutes: Routes = [
  { path: 'welcome', component: MainContainerComponent },
  { path: 'select/:id', component: SelectSpecificComponent },
  { path: 'update/:id', 
  component: UpdateSpecificComponent,
  // resolve: {
  //   data: APIResolver
  //   },
  },
  { path: 'search/:id', component: SelectKeywordComponent},
  { path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
  ,{ path: '**', component: MainContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
