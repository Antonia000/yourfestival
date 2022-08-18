import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import {  Observable } from "rxjs";
import { FestivalService } from "../festivals/services/festivals.service";
import { map, startWith, windowWhen} from 'rxjs/operators';


@Component({
    selector : 'nav-component',
    templateUrl : 'nav.component.html',
    styles : [`
    .btn{
         padding: .45rem 1.5rem .35rem;
         margin:0px 50px;
    }
    .gradient-custom {
      /* fallback for old browsers */
      background: #c471f5;

      /* Chrome 10-25, Safari 5.1-6 */
      background: -webkit-linear-gradient(to right, rgba(196, 113, 245, 1), rgba(250, 113, 205, 1));

      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      background: linear-gradient(to right, rgba(196, 113, 245, 1), rgba(250, 113, 205, 1));
    }

    li a{
    margin:0px 8px;
      }
    .navbar-brand{
      margin:0px 20px;
    }
    .dropdown-item{
      cursor:pointer;
      padding:10px;
    }
    .icon{
      margin-left:13px;
    }
    .mat-option{
      font-size:14px;
    }
    form{
      height:44px;
    }
    .search-box{
      display:flex;  
    }
    button{
      padding:0px 15px;
      border:1px solid #fff;
      border-radius: 0 25px 25px 0;

    }
    .mat-input-element{
      border:1px solid #fff;
      background-color:#fff;
      border-radius:25px;
      padding:0px 8px;
      margin:0;
      text-align:start;
    }
    .navbar-toggler{
      border:none;
      border:1px solid rgba(217, 217, 217,0.2);
      border-radius: 4px;
    }
    .mobile-collapse  ul{
      justify-content:center;
      margin:0;
      padding:0;
       background-color:rgba(255, 204, 255,0.2);
    }
    .mobile-collapse ul li{
      width:200px;
    }
    .mobile-collapse ul li:hover{
      background-color:rgba(255, 204, 255,0.2);
      width:200px;
      border-radius: 4px;
    }


`]

})

export class NavComponent implements OnInit {
  
  festivals : any = this.festivalService.getFestivals();
  search = new FormControl();
  options : string[] = [];
  filteredOptions : Observable<string[]>;
  currentRoute : any;
  mobile:boolean = window.innerWidth < 1000 ? true : false;

  constructor(private festivalService : FestivalService, public router: Router){

    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
            // set the route    
            this.currentRoute = event.url; 
        }

        if (event instanceof NavigationError) {
            // display error routing
            console.log(event.error);
        }
    });

  }

  resizeListener(){
    return window.innerWidth;
  }
  ngOnInit() {
    window.addEventListener("resize", this.resizeListener);

    // options for search form
    this.festivals.map((festival:any)=>{
      this.options.push(festival.name)
    })

    // filtering for search form
    this.filteredOptions = this.search.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  // filter method
  private _filter(value:string) : string[]{
    const filterValue =  value.toLowerCase() ;
    return this.options.filter((option:string) => option.toLowerCase().includes(filterValue));
  }

  // search form navigation
    handleSearch(){
        if(this.options.includes(this.search.value) ){

          this.router?.navigateByUrl('', {skipLocationChange: true}).then(() => {
            this.router?.navigate(['/festivals', this.search.value]);
            this.search.reset();
          }) 
        }
        else{
          this.router.navigate(['/festivals'])
        }
    }
    // dropdown navigation function for maps route
    handleClick(name:any){
      this.router?.navigateByUrl('', {skipLocationChange: true}).then(() => {
        this.router?.navigate(['maps', name])
      })
      
    }



}

