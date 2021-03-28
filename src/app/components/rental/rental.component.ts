import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/entities/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rental: Rental[] = [];
  dataLoaded = false;
  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getRental();
  }
  getRental() {
    this.rentalService.getRental().subscribe((response) => {
      this.rental = response.data;
      this.dataLoaded = true;
    });
 
  }
}
