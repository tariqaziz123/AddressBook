import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './head/home/home.component';
import {AddressComponent} from './head/address/address.component';
import {AboutComponent} from './head/about/about.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"address", component:AddressComponent},
  {path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
