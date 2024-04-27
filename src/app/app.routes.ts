import {Routes} from '@angular/router';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {DashboardHomeComponent} from "./component/dashboard-home/dashboard-home.component";
import {CustomerContextComponent} from "./component/customer-context/customer-context.component";
import {CustomerNewComponent} from "./component/customer-context/inner/customer-new/customer-new.component";
import {CustomerUpdateComponent} from "./component/customer-context/inner/customer-update/customer-update.component";
import {CustomerAllComponent} from "./component/customer-context/inner/customer-all/customer-all.component";


export const routes: Routes = [
  {path: '', redirectTo: '/dashboard/home', pathMatch: 'full'},
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: '', redirectTo: '/dashboard/home', pathMatch: 'full'},
      {path: 'home', component: DashboardHomeComponent},
      {
        path:'customers',component:CustomerContextComponent,children:[
          {path:'',redirectTo:'/dashboard/customers/new',pathMatch:'full'},
          {path:'new',component:CustomerNewComponent},
          {path:'update',component:CustomerUpdateComponent},
          {path:'list',component:CustomerAllComponent},

        ]
      }
    ]
  }
];
