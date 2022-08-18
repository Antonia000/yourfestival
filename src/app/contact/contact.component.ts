import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators, FormGroupDirective } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ContactService } from "./contact.service";


@Component({
    selector : 'contact',
    templateUrl : './contact.component.html',
    styles:[`
    .example-full-width {
        width: 40%;
    }
    .mat-checkbox{
        font-size:13px;
        color:#737373;
    }
    h4{
        color:#FC9CDC;
        font-size:17px;
    }
    h2{
            color:#4d4d4d;
        }

    `]
})

export class ContactComponent implements OnInit{
    contactForm =  new FormGroup({
        name : new FormControl('', [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{2,8}')]),
        email :  new FormControl('', [Validators.required, Validators.email]),
        subject :  new FormControl('', [Validators.pattern('[a-zA-Z0-9]{3,}')]),
        message :  new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z0-9]{5,}.*')]),
        agree :  new FormControl(false ,[Validators.required])
    })
    @ViewChild(FormGroupDirective) fg:any;

    constructor(private contactService : ContactService, private toastr: ToastrService, private router: Router){

    }
    

    ngOnInit() {
      
    }

    submitForm(){
        if( 
            !this.contactForm?.get('name')?.hasError('required')&&
            !this.contactForm?.get('name')?.hasError('pattern') &&
            !this.contactForm?.get('email')?.hasError('required')&&
            !this.contactForm?.get('message')?.hasError('pattern') &&
            !this.contactForm?.get('message')?.hasError('required')&&
            !this.contactForm?.get('subject')?.hasError('pattern')&&
            this.contactForm?.get('agree')?.value === true
            )
            {
            this.contactService.sendForm({
                name: this.contactForm.get('name')?.value,
                email: this.contactForm.get('email')?.value,
                subject : this.contactForm.get('subject')?.value,
                message : this.contactForm.get('message')?.value,
                agree : this.contactForm.get('agree')?.value,
            }).subscribe()

            this.toastr.success("Thank you for your message!")
            this.contactForm.reset();

    
        }else{
                console.log( this.contactForm?.get('agree')?.value)
                this.toastr.error("Please fill in all the fields!")
            }

    }
       

}