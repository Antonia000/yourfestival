import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router} from "@angular/router";
import { FestivalService } from "./services/festivals.service";

@Component({
    templateUrl: './festival-page.component.html',
    styles:[`
        
        .container{
            justify-content: center; 
        }
        .card{
            margin-bottom:20px;
            padding:10px;
            text-align:center;
            background-size:cover;
            border:1px solid #d9d9d9;
            border-radius:10px;
        }
        .card > *{
            padding:20px;
            color: #fff;
        }
        h3{
            font-size:40px;
        }
        .name h2{
            width:60px;
            height:60px;
            border:3px solid rgba(242, 242, 242,0.6);
            border-radius:50%;
            font-weight:bold;
            padding-top:17px;
        }
        .name{
            background-color: linear-gradient(rgba(255, 255, 255,0.5),rgba(255, 255, 255,0.8)); 
        }
     
        .book-button{
            background-color: rgba(255, 255, 255,0.8);
            padding:8px 40px;
            border:1px solid rgba(255, 255, 255,0.2);
            border-radius:6px;
            color:rgba(255, 51, 255,0.8);
            font-size:17px;
        }
        .book-button:hover{
            background-color: rgba(255, 255, 255,0.9);
            color:rgb(255, 0, 255);
        }
        .session-details{
            background-color:rgba(255, 255, 255,0.2);
            display:flex;
            justify-content:center; 
        }

        p {
            padding:0;
            margin:0;
        }
        .row{
            justify-content:space-evenly;
        }
        h2,h3,h4,h5{
            color:#fff;
        }
        h1{
            color :#4d4d4d;
        }
     
    `]

})

export class FestivalPageComponent implements OnInit{
    festival:any;
    next:any;

    constructor(private festivalService:FestivalService, private route:ActivatedRoute,private router: Router){
      
    }

    ngOnInit(){
        this.festival = this.festivalService.getFestival(this.route?.snapshot?.params['name'])
    }

    //navigate to festival's sessions
    handleClick(name:any, session:any){
        this.router.navigate(['festivals',name,session, 'booking'])
    }


}