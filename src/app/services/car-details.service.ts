import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/entities/car';
import { CarDetails } from '../models/entities/carDetails';
import { ListResponseModel } from '../models/responses/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailsService {
  apiUrl = "https://localhost:44355/api";

  constructor(private httpClient: HttpClient) {}
 
  getCarDetails(carId:number): Observable<ListResponseModel<CarDetails>> {
    let newPath=this.apiUrl+"/car/CarDetails?carId="+carId 
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
}
