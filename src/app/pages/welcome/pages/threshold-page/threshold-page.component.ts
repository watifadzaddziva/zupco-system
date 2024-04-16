import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultService } from '../../../../services/default.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-threshold-page',
  templateUrl: './threshold-page.component.html',
  styleUrl: './threshold-page.component.css'
})
export class ThresholdPageComponent {
  thresholds!: any;
  page = 1;
  baseUrl!: string;
  visible!: boolean;
  threshold  ={}
  viewId !: any;
  username!: any
  id!: any;
  emp!: any;
  showSetThresholdBtn!:boolean ;

  constructor(private defaultService: DefaultService, private router : Router,
    private injector: Injector, private nzMessageService: NzMessageService, private notification: NzNotificationService) {
  }

  ngOnInit(): void {
    this.load();
   }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

  load( event?: number): void {
    this.defaultService.getThreshold().subscribe((res)=>{
      this.thresholds= res;
      (error: HttpErrorResponse) => 
        {
        if (error.status==400)
          {
            this.showSetThresholdBtn=true;
        }else
        {
            this.showSetThresholdBtn=false;
        }
      }}
    );

  }
  reload(event : any){
    this.load(event)
    this.threshold = {}
  }

}
