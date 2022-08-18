import { Component, Input, OnInit } from "@angular/core";
import {  Router } from "@angular/router";
import { Booking } from "./booking/booking.interface";
import { TicketsService } from "./booking/booking.service";


@Component({
    selector:'festival-card',
    templateUrl: './festival-card.component.html',
    styles :[`
        .card{
            background-size:cover;
            border:1px solid #d9d9d9;
            border-radius:10px;
            color:#4d4d4d;
            min-width:350px;
            max-width:550px;
        }
    
        .designCard{
            background-color:rgba(242, 242, 242,0.3) ;
            border:1px solid #fff;
            padding:18px;
            min-height:360px;
            max-width:550px;
            
        }
        .designCard:hover{
            background-color:rgba(242, 242, 242,0.1);
            cursor:pointer;
            
        }

        .Date {
            color : #ffb3ff;
            background-color:rgba(255, 255, 255,0.8);
            padding:5px;
            border-radius:5px; 
        }
        .Date:hover{
            background-color:rgb(255, 255, 255);
        }
        .button{
            display:flex;
            justify-content:flex-end;
    
        }

        .tickets{
            display:flex;
            justify-content:flex-end;
            align-items:center;
            margin-bottom:12px;
            font-size:13px;
            font-weight:bold;
        }
        .tickets .icon{
            text-align:center;
            margin-right:6px;
            font-size:17px;
        }
        .name{
            align-self:center;
        }

  
    `]
})

export class FestivalCardComponent implements OnInit{
    @Input() festivals :any;
    
    bookedTickets:Booking[] =[];
    lastBooking :number;

    constructor(private router:Router, private ticketsService: TicketsService){
    }

    ngOnInit() {

        this.bookedTickets = this.ticketsService?.getTickets() as Booking[];
    }
    

     //navigate to a specific festival
    handleClick(name:any){
        this.router.navigate(['festivals/', name]);
    }

}
