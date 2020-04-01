import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CrudAddComponent} from './crud-add/crud-add.component';
import {CrudEditComponent} from './crud-edit/crud-edit.component';
import {CrudGetComponent} from './crud-get/crud-get.component';
import {CrudDeleteComponent} from './crud-delete/crud-delete.component';


const routes: Routes = [
  {path: 'college/create',
  component: CrudAddComponent},

{path: 'college/edit/:id',
  component: CrudEditComponent},

{path: 'college',
  component: CrudGetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
