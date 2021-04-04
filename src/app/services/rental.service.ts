import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/entities/rental';
import { ListResponseModel } from '../models/responses/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiurl="https://localhost:44355/api/rental/getall"
  constructor(private httpClient:HttpClient) { }

  getRental():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiurl)
  }
}
 