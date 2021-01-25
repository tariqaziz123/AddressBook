import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AddressService } from './address.service';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    AddressComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
