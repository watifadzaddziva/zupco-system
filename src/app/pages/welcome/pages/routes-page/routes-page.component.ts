import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DefaultService } from '../../../../services/default.service';

@Component({
  selector: 'app-routes-page',
  templateUrl: './routes-page.component.html',
  styleUrl: './routes-page.component.css'
})
export class RoutesPageComponent {
  routes:any;
  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() route!: any;
  @Output() output = new EventEmitter();

  constructor(private service: DefaultService,private nzMessageService:NzMessageService){}

  ngOnInit(): void {
    this.load();
  }

  toggle(visible:boolean){
    this.visible= visible;
  }

  load(event?:number){
    this.service.getAllRoutes().subscribe((res)=>{
      this.routes= res
    })
  }

  reload(event:any){
this.load(event);
this.route={};
  }

  confirm(id: number): void {
  //   this.service.deleteDepartment(id).subscribe(() => {
  //     this.nzMessageService.info('department has been deleted');
  //     this.load();
  //   });
  }

}
