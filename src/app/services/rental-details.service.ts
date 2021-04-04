import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetails } from '../models/entities/rentalDetails';
import { ListResponseModel } from '../models/responses/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalDetailsService {

  apiUrl="https://localhost:44355/api/rental/RentalDetails"
  constructor(private httpClient:HttpClient) { }
  getRentalDetail():Observable<ListResponseModel<RentalDetails>>{
    return this.httpClient.get<ListResponseModel<RentalDetails>>(this.apiUrl)
  }
}
