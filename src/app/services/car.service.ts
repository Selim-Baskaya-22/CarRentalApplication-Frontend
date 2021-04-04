import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/entities/car';
import { Color } from '../models/entities/color';
import { ListResponseModel } from '../models/responses/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44355/api/"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"car/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath) 
  }
  getByBrandId(brandId:number):Observable<ListResponseModel<Car>>
  {
    let newPath=this.apiUrl+"car/getbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"car/getbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
}
