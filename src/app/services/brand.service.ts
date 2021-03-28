import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/responses/brandResponseModel';
import {HttpClient} from"@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44355/api/brand/getall"
  constructor(private httpclient:HttpClient) { }

  getBrand():Observable<BrandResponseModel>
  {
    return this.httpclient.get<BrandResponseModel>(this.apiUrl)
  }
}
