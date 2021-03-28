import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/entities/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer:Customer[]=[]
  dataLoaded=false
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomer()
  }
  getCustomer(){
    this.customerService.getCustomer().subscribe(response=>{
      this.customer=response.data
      this.dataLoaded=true
    })
  }

}
