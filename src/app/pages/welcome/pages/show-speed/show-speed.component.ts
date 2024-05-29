import { Component, OnInit } from '@angular/core';
import FusionCharts from 'fusioncharts';
import { DefaultService } from '../../../../services/default.service';

@Component({
  selector: 'app-show-speed',
  templateUrl: './show-speed.component.html',
  styleUrl: './show-speed.component.css'
})

export class ShowSpeedComponent implements OnInit {

  constructor( private service:DefaultService){}
  speed!:any;
  ngOnInit() {
    this.getSpeed();


    this.service.showFuelLevel().subscribe((data: any) => {
      FusionCharts.ready(function () {
        const fuelGauge = new FusionCharts({
          type: 'angulargauge',
          renderAt: 'fuelGaugeContainer',
          width: '400',
          height: '300',
          dataFormat: 'json',
          dataSource: {
            chart: {
              caption: 'Fuel Gauge',
              lowerLimit: '0',
              upperLimit: '100',
              showValue: '1',
              valueBelowPivot: '1',
              theme: 'fusion',
              majorTMNumber:'11',
              minorTMNumber:'9'
            },
            colorRange: {
              color: [
                {
                  minValue: '0',
                  maxValue: '25',
                  code: '#f44336' 
                },
                {
                  minValue: '25',
                  maxValue: '75',
                  code: '#ff9800' 
                },
                {
                  minValue: '75',
                  maxValue: '100',
                  code: '#4caf50' 
                }
              ]
            },
            dials: {
              dial: [
                {
                  value: data.level 
                }
              ]
            }
          }
        });
        fuelGauge.render();
      });
    });
  }

  getSpeed(){
    this.service.showSpeed().subscribe((res)=>{
      this.speed=res;
    })
  }

}
