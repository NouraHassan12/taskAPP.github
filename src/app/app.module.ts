import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ItemsComponent } from './Components/items/items.component';
import { RggisterComponent } from './Components/rggister/rggister.component';
import {FormsModule ,} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {ModalModule} from 'ngx-bootstrap/modal';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ItemsComponent,
    RggisterComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ConfirmationPopoverModule, 
    ConfirmationPopoverModule.forRoot({
    confirmButtonType:'warning',
    }),
    ModalModule,
   
    ModalModule.forRoot(),
    
  
    // NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
