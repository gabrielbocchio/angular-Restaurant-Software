import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path:"", component: LoginComponent },
  {path:"admin", component: AdminComponent },
  {path:"menu", component: MenuComponent },
  {path:"add", component: AddComponent },
  {path:"edit", component: EditComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
