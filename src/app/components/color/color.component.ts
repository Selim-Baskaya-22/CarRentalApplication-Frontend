import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/entities/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color:Color[]=[]
  dataLoaded=false
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColor()
  }

  getColor(){
      this.colorService.getColor().subscribe(response=>{
        this.color=response.data
        this.dataLoaded=true
      })
  }
}
