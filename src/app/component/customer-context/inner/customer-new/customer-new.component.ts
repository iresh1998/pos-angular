import { Component } from '@angular/core';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-customer-new',
  standalone: true,
  imports: [
    MatInput,
    MatFormField,
    MatLabel,
    MatButton
  ],
  templateUrl: './customer-new.component.html',
  styleUrl: './customer-new.component.scss'
})
export class CustomerNewComponent {

}
