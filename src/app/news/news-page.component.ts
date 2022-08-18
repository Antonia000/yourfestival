import { Component } from "@angular/core";

@Component({
    selector : 'news-page',
    template : `
    <div class="container">
        <div class="row mt-5 m-2">
            <h2>Star Wars Movies</h2>
            <hr>
            <p *ngIf="seenMovies.length > 0" class="seen">Seen movies : <span *ngFor="let movie of seenMovies">
                
            <button (click)="removeMovie(movie)"><i class="fa fa-window-close" aria-hidden="true"></i></button> {{movie}}</span></p>
            <news (newEvent)="showMovies($event)" [seenMoviesUpdated]="seenMovies"></news>
        </div>
    </div>
    `,
    styles:[`
        .seen{
            background-color:#f3e6ff;
            border:1px solid #e6ccff;
            border-radius:5px;
            padding:14px;
            color:#b366ff;
        }
        .seen span, button{
            background-color:#fff;
            border:1px solid #fff;
            border-radius:4px;
            color:#ce99ff;
        }
        .seen span{
            padding:4px;
            margin:5px;
        }
        h2{
            line-height:30px;
            color:#4d4d4d;
        }
    
    `]
})

//parent component for news.component
export class NewsPageComponent{
    seenMovies : string[]=[];

    // feature for displaying seen movies 
    showMovies(movie:any){
        if(!this.seenMovies.includes(movie)){
            this.seenMovies.push(movie);
        }
    }

    // function for removing the movie from the seen movies list
    removeMovie(movie:string){
        this.seenMovies = this.seenMovies.filter((item:string)=>{
            return item !== movie ? item : '';
        })
       // console.log(this.removedMovie)
    }


}