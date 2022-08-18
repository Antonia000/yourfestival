import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsPageComponent } from './news-page.component';
import { NewsService } from './service/news.service';
import { ToastrModule } from 'ngx-toastr';
import { NewsRoutingModule } from './routing/news-routing.module';



@NgModule({
  declarations: [
    NewsComponent,
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ToastrModule.forRoot()
  ],
  providers:[NewsService, 
    ],
})
export class NewsModule { }
