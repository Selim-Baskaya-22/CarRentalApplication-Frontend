import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from '../models/responses/rentalDetailsResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailsService {

  apiUrl="https://localhost:44355/api/rental/RentalDetails"
  constructor(private httpClient:HttpClient) { }
  getRentalDetail():Observable<RentalDetailResponseModel>{
    return this.httpClient.get<RentalDetailResponseModel>(this.apiUrl)
  }
}
