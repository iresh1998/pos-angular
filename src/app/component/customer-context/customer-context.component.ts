import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppComponent} from "../../app.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-customer-context',
  standalone: true,
  imports: [
    RouterOutlet,
    AppComponent,
    MatTabGroup,
    MatTab,
    RouterLink
  ],
  templateUrl: './customer-context.component.html',
  styleUrl: './customer-context.component.scss'
})
export class CustomerContextComponent {

}
