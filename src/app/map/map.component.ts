import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FestivalService } from "../festivals/services/festivals.service";

@Component({
    selector:'map-component',
    template: `
        <div class="container">
            <div class="row my-4">
                <div class="col-12">
                    <h1 class="mt-4">Your map for {{currentfestival.name}}</h1>
                    <hr class="mb-4">
                    <map [festival]="currentfestival" class="mb-4"></map>
                </div>
            </div>
        </div>
    `,
})

export class MapComponent implements OnInit{

    currentfestival: any;
    constructor(private festivalService: FestivalService, private activRoute: ActivatedRoute){
    }

    ngOnInit(){
        this.currentfestival = this.festivalService.getFestival(this.activRoute?.snapshot?.params['name']);   
    }
    
}