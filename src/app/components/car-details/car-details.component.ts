import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/entities/car';
import { CarDetails } from 'src/app/models/entities/carDetails';
import { CarDetailsService } from 'src/app/services/car-details.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  images:CarDetails [];
  carDetails1:CarDetails
  currentCar:Car
  car:Car[]
  dataLoaded=false
 
  imageUrl = environment.staticFilesUrl;
  constructor(private carDetailService:CarDetailsService,
    private activatedRoute:ActivatedRoute) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        if(params["carId"]){
          this.getCarDetails(params["carId"]);
          this.getCarDetails(params["carId"]);
        }
      })
    }
  
    getCarDetails(carId:number)
    {
      this.carDetailService.getCarDetails(carId).subscribe(response => {
        this.images = response.data;
        this.dataLoaded=true;
        console.log(response);
      })
    }

    getSliderClassName(index:Number){
      if(index == 0){
        return "carousel-item active";
      } else {
        return "carousel-item ";
      }
    }
  setButtonHomePage(currentCar:Car){
      this.currentCar=currentCar
  }


  getButtonHomePageClass(currentCar:Car){
      return '"btn btn-primary"'
  }

}
