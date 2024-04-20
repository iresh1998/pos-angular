import { Component } from '@angular/core';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-new',
  standalone: true,
  imports: [
    MatInput,
    MatFormField,
    MatLabel,
    MatButton,
    ReactiveFormsModule
  ],
  templateUrl: './customer-new.component.html',
  styleUrl: './customer-new.component.scss'
})
export class CustomerNewComponent {
loading:boolean=false;
  form=new FormGroup({
    fullName:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    salary:new FormControl('',[Validators.required]),
    avatar:new FormControl('',[Validators.required])
  })

  saveCustomer(){

   }

}
