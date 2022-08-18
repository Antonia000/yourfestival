import { Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import { NewsService } from "./service/news.service";


@Component({
    selector : 'news',
    templateUrl : 'news.component.html',
    styles : [`
        .meta{
            font-size:13px;
            margin-bottom:10px;
            color: rgba(242, 242, 242,0.8);
        }
        h3{
            color:#fff;  
            padding-bottom:10px;
            border-bottom:1px solid #fff;
        }
        p{
            color:#FFF6FF;
        }
        a h5{
            color:#f3e6ff;
            margin:5px 0px;
        }
        a,h5:hover{
            color:#b366ff;
            cursor:pointer;

        }
        .characters{
            color:#FFF6FF;
        }
        .card{
            background-image: linear-gradient(45deg,rgb(193, 128, 255),rgb(255, 153, 255));
        }
        .card:hover{
            background-color: rgba(179, 102, 255,0.8);
        }
        .seen{
            text-align:end;
        
        }
`]

})

export class NewsComponent implements OnInit{
  
    films : {
        count:number;
        next: null;
        previous:null;
        results: Array<any>
    }={ count : 0,
        next:null,
        previous:null,
        results: []
        
    };
    charactersUrls : any[]=[];

    characters : [{
        name : string;
        mass :string
    }]=[{
        name: '',
        mass: ''
    }];

    filmsArray:any[]=[];
        
    done : boolean = false;
    isClicked : boolean = false;
    currentId : number = 0;
    seenMovies :string[] = [];
    @Input() seenMoviesUpdated:string[];
    @Output() newEvent = new EventEmitter<string[]>();

    constructor(private newsService :  NewsService){

    }
    
    ngOnInit(){

        // fetching the movies
        this.newsService.getFilms().subscribe((data:object) => {

            this.films = {
            count: (data as any).count,
            next: (data as any).next,
            previous: (data as any).previous,
            results: (data as any).results
            }
            
        });
        
        // fetching the characters
        this.newsService.getCharacters().subscribe((data:any)=>{
            this.charactersUrls = (data as any).results
        })

    }

    // function for displaying characters 
    showDetails(filmId:number){
        this.isClicked = !this.isClicked;
        this.currentId = filmId;
        let characters:string[] = [];

        for(let i=0; i<this.films.count; i++){

            if(this.films.results[i].episode_id === filmId && this.done == false){
                this.done = true;
                characters = this.films.results[i].characters;
            } 
            }

            for(let i=0; i < this.charactersUrls.length; i++){

                if(characters[i] == this.charactersUrls[i].url){

                        this.characters.push({
                        name : this.charactersUrls[i].name,
                        mass : this.charactersUrls[i].mass
                    })
                
                }
            }
    }

    //check button for marking a movie as seen
    checkMovie(val:any){
        this.newEvent.emit(val);
    }


  
}
