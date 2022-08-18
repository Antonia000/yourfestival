import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from '../booking/booking.component';
import { TicketsComponent } from '../booking/tickets.component';
import { FestivalPageComponent } from '../festival-page.component';
import { FestivalsListComponent } from '../festivals-list.component';


const routes: Routes = [
  {
    path: '',
    component: FestivalsListComponent,
  },
  {path: 'tickets',
  component: TicketsComponent,
  },
  {path: ':name',
    component: FestivalPageComponent
  },
  {path: ':name/:session/booking',
  component: BookingComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FestivalsRoutingModule { }