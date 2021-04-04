import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"", pathMatch:"full",component:CarComponent},
  {path:"car", component:CarComponent},
  {path:"car/brand/:brandId", component:CarComponent},
  {path:"car/color/:colorId", component:CarComponent},
  {path:"car/carDetails/:carId", component:CarDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
