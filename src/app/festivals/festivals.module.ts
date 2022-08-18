import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { TicketsComponent } from './booking/tickets.component';
import { FestivalCardComponent } from './festival-card.component';
import { FestivalPageComponent } from './festival-page.component';
import { FestivalsListComponent } from './festivals-list.component';
import { FestivalService } from './services/festivals.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TicketsService } from './booking/booking.service';
import { FestivalsRoutingModule } from './routing/festivals-routing.module';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
      BookingComponent,
      TicketsComponent,
      FestivalCardComponent,
      FestivalPageComponent,
      FestivalsListComponent

  ],
  imports: [
    CommonModule,
    MatSliderModule,
    HttpClientModule,
    FestivalsRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [FestivalService, TicketsService],
  exports: [
  ]
})
export class FestivalsModule { }
