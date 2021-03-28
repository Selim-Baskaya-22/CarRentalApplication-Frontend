import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailsResponseModel } from '../models/responses/carDetailsResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailsService {
  apiUrl = "https://localhost:44355/api/car/CarDetails";

  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<CarDetailsResponseModel> {
    return this.httpClient.get<CarDetailsResponseModel>(this.apiUrl);
  }
}
