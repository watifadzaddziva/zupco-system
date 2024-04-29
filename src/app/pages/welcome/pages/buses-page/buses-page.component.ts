import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DefaultService } from '../../../../services/default.service';

@Component({
  selector: 'app-buses-page',
  templateUrl: './buses-page.component.html',
  styleUrl: './buses-page.component.css'
})
export class BusesPageComponent {
  buses:any;
  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() bus!: any;
  @Output() output = new EventEmitter();
  user!:any;

  constructor(private service: DefaultService,private nzMessageService:NzMessageService){}

  ngOnInit(): void {

    if (this.service.isAuthenticated()) {
      this.service.setTokenPayload();
      this.user = this.service.tokenPayload?.preferred_username;
    }
    this.load();
  }

  toggle(visible:boolean){
    this.visible= visible;
  }

  load(event?:number){
    this.service.getAllBus().subscribe((res)=>{
      this.buses= res
    })
  }

  reload(event:any){
this.load(event);
this.bus={};
  }

  confirm(id: number): void {
    // this.service.deleteDepartment(id).subscribe(() => {
    //   this.nzMessageService.info('department has been deleted');
    //   this.load();
    // });
  }

}
