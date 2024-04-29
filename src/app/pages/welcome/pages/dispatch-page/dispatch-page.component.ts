import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DefaultService } from '../../../../services/default.service';

@Component({
  selector: 'app-dispatch-page',
  templateUrl: './dispatch-page.component.html',
  styleUrl: './dispatch-page.component.css'
})
export class DispatchPageComponent {
  drivers:any;
  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() dispatch!: any;
  @Output() output = new EventEmitter();

  constructor(private service: DefaultService,private nzMessageService:NzMessageService){}

  ngOnInit(): void {
    this.load();
  }

  toggle(visible:boolean){
    this.visible= visible;
  }

  load(event?:number){
    this.service.getAllDispatch().subscribe((res)=>{
      this.drivers= res
    })
  }

  reload(event:any){
this.load(event);
this.dispatch={};
  }


}
