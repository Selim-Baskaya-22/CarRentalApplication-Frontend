import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/responses/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44355/api/color/getall"
  constructor(private httpClient:HttpClient) { }

  getColor():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl)
  }
}
