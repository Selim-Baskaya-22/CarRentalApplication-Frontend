import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/responses/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiurl="https://localhost:44355/api/rental/getall"
  constructor(private httpClient:HttpClient) { }

  getRental():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiurl)
  }
}
