import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/entities/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car:Car[]=[]
  currentCar:Car
  dataLoaded = false;
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["brandId"]) {
        this.getByBrandId(params["brandId"])
      }
      else if (params["colorId"]) {
        this.getByColorId(params["colorId"])
      }
      else {
        this.getCars()
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.car = response.data;
      this.dataLoaded = true;
    });

  }
  getByBrandId(brandId:number){
      this.carService.getByBrandId(brandId).subscribe(response=>{
      this.car=response.data
      this.dataLoaded=true
    })   
  }
  getByColorId(colorId:number){

      this.carService.getByColorId(colorId).subscribe(response=>{
        this.car=response.data
        this.dataLoaded=true
    })
  }

  setButtonDetail(car:Car){
    this.currentCar=car
  }

  getCurrentButtonClass(car:Car){
      if (this.currentCar==car) {
        return '"btn btn-primary"'
      }
      else{
        return '"btn btn-primary"'
      }
  }

  
}
