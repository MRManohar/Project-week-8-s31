import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KidComponent } from './kid/kid.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { CartComponent } from './cart/cart.component';
import { ApisComponent } from './apis/apis.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'kid',component:KidComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'cart',component:CartComponent},
  {path:'apis',component:ApisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
