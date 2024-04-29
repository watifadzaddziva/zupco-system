import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DefaultService } from '../../../../services/default.service';

@Component({
  selector: 'app-driver-page',
  templateUrl: './driver-page.component.html',
  styleUrl: './driver-page.component.css'
})
export class DriverPageComponent {
  drivers:any;
  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() driver!: any;
  @Output() output = new EventEmitter();

  constructor(private service: DefaultService,private nzMessageService:NzMessageService){}

  ngOnInit(): void {
    this.load();
  }

  toggle(visible:boolean){
    this.visible= visible;
  }

  load(event?:number){
    this.service.getAllDrivers().subscribe((res)=>{
      this.drivers= res
    })
  }

  reload(event:any){
this.load(event);
this.driver={};
  }

  confirm(id: number): void {
  //   this.service.deleteDepartment(id).subscribe(() => {
  //     this.nzMessageService.info('department has been deleted');
  //     this.load();
  //   });
  }

}
