import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FestivalsModule } from './festivals/festivals.module';
import { FooterModule } from './footer/footer.module';
import { MapModule } from './map/map.module';
import { NavModule } from './nav/nav.module';
import { NewsModule } from './news/news.module';
import { ContactModule } from './contact/contact.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FestivalsModule,
    FooterModule,
    MapModule,
    NavModule,
    NewsModule,
    ContactModule,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
