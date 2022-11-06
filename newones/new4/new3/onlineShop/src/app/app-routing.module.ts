import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FeaturespecificComponent } from './featurespecific/featurespecific.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:"feature/:id",component:FeaturespecificComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
