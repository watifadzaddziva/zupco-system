import { Component } from '@angular/core';
import { DefaultService } from '../../../../services/default.service';

@Component({
  selector: 'app-set-fuel-level',
  templateUrl: './set-fuel-level.component.html',
  styleUrl: './set-fuel-level.component.css'
})
export class SetFuelLevelComponent {
  fuelLevel=75;

  constructor(private service:DefaultService){}


  ngOnInit(){
    // this.service.getFuel().subscribe((res)=>{
    //   this.fuelLevel=res;
    // })
  }

}
