import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()

export class NewsService{

    baseUrl : string ="https://swapi.dev/api/films";

    constructor(private http: HttpClient) { 
        
    }

    getFilm(id:string){
        return this.http.get<object>(`${this.baseUrl}/${id}`);
    }
    getFilms(){
        console.log("Getting data...")
        return this.http.get<object>(this.baseUrl);
    }

    getCharacters(){
        let charactersUrl = "https://swapi.dev/api/people";
        console.log("Getting characters...")
        return this.http.get(charactersUrl)
    }
}