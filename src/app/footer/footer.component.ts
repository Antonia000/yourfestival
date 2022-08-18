import { Component } from "@angular/core";
import { ToastrService} from "ngx-toastr";
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from "../contact/contact.service";

@Component({
    selector : 'footer',
    templateUrl:'./footer.component.html',
    styles:[`
    .footer .footer-content{ 
  /* fallback for old browsers */
        background: #c471f5;

        /* Chrome 10-25, Safari 5.1-6 */
        background: -webkit-linear-gradient(to left, rgba(196, 113, 245, 1), rgba(250, 113, 205, 1));

        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: linear-gradient(to left, rgba(196, 113, 245, 1), rgba(250, 113, 205, 1));

        padding:20px 50px;
        color:#fff;
        text-align:center;
}
    .row{
        justify-content:center;
    }
    .social{
        font-size:27px;
        margin:14px 0px;
    }
    
    a{
        color:#fff; 
        
    }
    a:hover{
        color:#f2f2f2; 
    }
    .contact-form input, .contact-form textarea{
        margin:8px 0px;
        border:1px solid #fff;
        border-radius:5px;
        padding:3px;
        width:220px;
    }
    .contact-form{
        display:grid;
        justify-content:center;
    }
    
    ul{
        list-style-type:none;
         padding:5px 0px;
    }
    ul li{
        margin-bottom:7px;
    }
    button{
        display:block;
        width:220px;
        border:1px solid #fff;
        border-radius:5px;
        background-color: #ff99ff;
        color:#fff;
        padding:5px;
    }
    button:hover{
        background-color:#fff;
        color:#d9b3ff;
    }
  
    
    `]
})

export class FooterComponent {

    contactForm =  new FormGroup({email: new FormControl(), message: new FormControl()})
    submited = {
        email : '',
        message : ''
    }

    constructor(private toastr : ToastrService, private contactService: ContactService){

    }

    // footer contact form function submit
    receiveFeedback(){
        this.submited ={
            email : this.contactForm?.get('email')?.value,
            message : this.contactForm?.get('message')?.value
        }
        if(this.submited.email == null || this.submited.email == " "){
            this.toastr.error("Please provide a valid email!")
        }
        else if(this.submited.message == null || this.submited.message == " "){
            this.toastr.error("Please provide a valid message!")
           
        }else{
            this.contactService.sendForm(this.submited).subscribe();
            this.toastr.success("Thank you for your feedback!")
            
        }
        this.contactForm.reset();
        

    }
 

}