import { Component } from "@angular/core";


@Component({
    selector:'home',
    template:`
    
    <div class="main">
    <div class="container py-4"
         [ngClass]="['home']">
         <br>
    <h1>Are you cool for the summer?</h1>
         <hr>
         <div class="row">
            <div class="col-md-7 left">
            <div class="card">
                <h3>Bring your friends and we'll share your stories on our Board Stories</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </div> 
            <div class="card">
                <h3>Check-in online and get 20% off</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>  
            </div>     
            <div class="col-md-5 right">
            <div class="card hello">
                <h4>June is for Neversea Festival</h4>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>  
            <div class="card">
                <h4>July is here and so is TommorowLand</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
            </div>  
            <div class="card">
                <h4>Come to Cochella Party</h4>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div> 
            <div class="card">
                <h4>Come and bring what is UNTOLD</h4>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div> 
        </div>

        </div>   
    </div>
    <div>
    `,
    styleUrls: ['./home.component.scss']

})

export class HomeComponent{

}