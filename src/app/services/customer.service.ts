import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/entities/customer';
import { ListResponseModel } from '../models/responses/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44355/api/customer/getall"
  constructor(private httpClient:HttpClient) { }

  getCustomer():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl)
  }
} 
