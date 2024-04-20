import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-customer-context',
  standalone: true,
  imports: [
    RouterOutlet,
    AppComponent
  ],
  templateUrl: './customer-context.component.html',
  styleUrl: './customer-context.component.scss'
})
export class CustomerContextComponent {

}
