import { Component, OnInit } from '@angular/core';
import { RentalDetails } from 'src/app/models/entities/rentalDetails';
import { RentalDetailsService } from 'src/app/services/rental-details.service';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css'],
})
export class RentalDetailsComponent implements OnInit {
  rentalDetail: RentalDetails[] = [];
  dataLoaded=false
  constructor(private rentalDetailsService: RentalDetailsService) {}

  ngOnInit(): void {
    this.getRentalDetails();
  }
  getRentalDetails() {
    this.rentalDetailsService.getRentalDetail().subscribe((response) => {
      this.rentalDetail=response.data
      this.dataLoaded=true

    });
  }
}
