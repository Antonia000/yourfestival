import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FestivalService } from "../services/festivals.service";
import { ToastrService } from 'ngx-toastr';
import { TicketsService } from "./booking.service";


@Component({
    selector:"booking",
    templateUrl:`booking.component.html`,
    styles:[`
    h3,h2{
        color :#4d4d4d;
    }
    .row{
        margin-top:30px;
    }
     .card{
        margin-bottom:20px;
        padding:25px;
        color :#4d4d4d;
     }
     .card > * {
        margin:8px;
     }
     .date{
        margin:6px 0px;
        color:#bfbfbf;
        font-size:14px;
     }
     input{
        width:40px;
     }
     .book-button{
        border:1px solid #ffccff;
        background-color:#ffb3ff;
        color:#fff;
        font-size:16px;
        border-radius:7px;
        padding: 8px;
     }
     .book-button:hover{
        background-color:#fff;
        color:#ffccff;
     }
     .cancel-button{
        background-color:#808080;
        border:1px solid #808080;
        font-size:16px;
        border-radius:7px;
        padding: 8px;
        color:#fff;
     }
     .cancel-button:hover{
        border:1px solid #808080;
        background-color:#fff;
        color:#808080;
        border-radius:7px;
     }
     .info{
        font-size:11px;
        color: #b3b3b3;
     }
     p{
        margin:3px;
     }
     .modal{
         display:none;
     }
     h4,h5,span{
         margin:0;
     }
    

    `]
})
export class BookingComponent implements OnInit{
    session:any;
    festivalName:any;
    subscriptionType:any;
    price:any=[];
    bookedTickets:any;
    booked:boolean = false;
    currentSession:any;
    ticketType:string;

    constructor(private festivalService: FestivalService, private route:ActivatedRoute, private router:Router, private toastr : ToastrService, private ticketService: TicketsService){

    }

    ngOnInit(){
        this.festivalName = this.route.snapshot.params['name'];
        const idSession =  this.route.snapshot.params['session'];
        const festival = this.festivalService.getFestival(this.festivalName);
        this.session = this.festivalService.getSession(festival, idSession);
        this.subscriptionType= Object.keys(this.session.price);
    }

    // change price acordingly to no. of tickets
    changePrice(tickets:any,i:any){
            this.price[i] = this.session.price[i] * tickets.value;
    }
    
    //gathering no. of tickets
    gatherData(tickets:any, category:string){
      this.bookedTickets = tickets.value;
      this.ticketType = category;
    }

    //submit booked tickets
    bookTickets(){
        this.currentSession = this.session.id;
        let session = this.currentSession == 1 ? 'first' : 'second'; 

        //set data in service
         this.ticketService.setBookedTickets({
            festival : this.festivalName,
            tickets : this.bookedTickets,
            category : this.ticketType,
            session : this.session
         })
       
         // toastr success
         this.toastr.success(`Booked ${this.bookedTickets} tickets at  ${session} session for ${this.festivalName}`)
         
         // navigate to tickets page
        this.router.navigate(['festivals/', 'tickets']);
    }
    
    
}



