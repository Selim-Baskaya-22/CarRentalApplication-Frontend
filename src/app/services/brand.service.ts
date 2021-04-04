import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from"@angular/common/http"
import { ListResponseModel } from '../models/responses/listResponseModel';
import { Brand } from '../models/entities/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44355/api/"
  constructor(private httpclient:HttpClient) { }

  getBrand():Observable<ListResponseModel<Brand>>
  {
    let newPath=this.apiUrl+"brand/getall"
    return this.httpclient.get<ListResponseModel<Brand>>(newPath)
  }
 
}
