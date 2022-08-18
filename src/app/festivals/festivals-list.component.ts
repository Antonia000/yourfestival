import { Component, OnInit } from "@angular/core";
import { FestivalService } from "./services/festivals.service";

@Component({
    selector:'festivals-list',
    template: `       
            <div class="container p-0">
                <div class="row py-5 mx-2">
                    <br>
                    <br>
                    <h2 class="lh-sm px-3">Upcoming festivals</h2>
                    <hr class="mb-0">
                    <festival-card [festivals]="festivals"></festival-card>
                </div>
            </div>`
            ,
            styles:[`
            h2{
                color :#4d4d4d;
            }`]
})

export class FestivalsListComponent implements OnInit{
    festivals:any;
    
    constructor(private festivalService : FestivalService){

    }
    ngOnInit(){

        //fetching data from festival service (data hardcoded)
        this.festivals=this.festivalService.getFestivals()

    }
        
}

