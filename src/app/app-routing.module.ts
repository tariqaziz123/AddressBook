import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddressComponent} from './address/address.component';
import {AboutComponent} from './about/about.component';

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
