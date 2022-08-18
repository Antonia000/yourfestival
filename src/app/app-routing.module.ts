import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 

  {path: 'home', component : HomeComponent},

  { 
    path: 'festivals', 
    loadChildren: () => import('./festivals/festivals.module').then(m => m.FestivalsModule)},
  { 
    path: 'maps', 
    loadChildren: () => import('./map/map.module').then(m => m.MapModule)
  },
  {
    path: 'news', 
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'contact', 
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

