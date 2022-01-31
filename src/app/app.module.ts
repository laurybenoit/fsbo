import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details.component';
import { PropertyItemComponent } from './properties/property-list/property-item/property-item.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PropertiesComponent,
    PropertyListComponent,
    PropertyDetailsComponent,
    PropertyItemComponent,
    LoginComponent,
    FooterComponent,
    ProfileComponent,
    BuyerComponent,
    SellerComponent,
    CarouselComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
