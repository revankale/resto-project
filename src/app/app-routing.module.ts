import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "list",
    component: ListRestoComponent
  },
  {
    path: "add",
    component: AddRestoComponent
  },
  {
    path: "update",
    component: UpdateRestoComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
