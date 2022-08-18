import { Injectable } from "@angular/core";
import { Booking } from "./booking.interface";


@Injectable()


export class TicketsService{
    
    tickets : Booking[]= [];

    setBookedTickets(data : Booking){
        let alreadyExists = false;

        this.tickets.map((obj:Booking)=>{
            if(data.festival == obj.festival && data.session.dateStart == obj.session.dateStart && data.category == obj.category){
                alreadyExists=true;
                let newTickets = +obj.tickets + +data.tickets;
                obj.tickets = newTickets;
            }
        })
        if(alreadyExists == false){
            this.tickets.push({
                festival : data.festival,
                tickets : data.tickets,
                category : data.category,
                session : data.session
            })
        }
    }

    getTickets(){
        if(this.tickets?.length > 0){
            return this.tickets
        }
        return;
    }


}