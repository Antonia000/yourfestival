import { Component, OnInit} from "@angular/core";
import { Booking } from "./booking.interface";
import { TicketsService } from "./booking.service";

@Component({
    selector : 'tickets',
    templateUrl :'./tickets.component.html',
    styles:[`
            .container {
                min-height:540px;
            }
            span{
                font-size:12px;
            }

            .card{
                background-color: rgba(204, 153, 255,0.2);
                padding:30px;
                border:1px solid rgba(204, 153, 255,0.3);
                color:#4d4d4d;
            }
            p{
                margin:2px;
            }
            .category{
                font-size:13px;
            }
            h2{
                color:#4d4d4d;
            }
    `]
})
export class TicketsComponent implements OnInit{
    bookedFestivals : string[]=[];
    bookedTickets : (string | null)[]=[];
    serviceData: Booking[] =this.ticketService?.getTickets() as Booking[]; ;
    
    constructor(private ticketService: TicketsService){

    }

    ngOnInit(){
        this.serviceData = this.ticketService.getTickets() as Booking[];
    }

}
