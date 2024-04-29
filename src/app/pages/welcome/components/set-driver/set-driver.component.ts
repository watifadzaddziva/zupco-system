import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultService } from '../../../../services/default.service';
import { driverFields } from '../../forms/driver.field';

@Component({
  selector: 'app-set-driver',
  templateUrl: './set-driver.component.html',
  styleUrl: './set-driver.component.css'
})
export class SetDriverComponent {
  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() driver!: any;
  @Output() output = new EventEmitter();
  fileList: any = [];
  options: any;
  isLoaded:boolean= false;
  isLoading:boolean=false;


  constructor(private service: DefaultService, 
    private notification: NzNotificationService, 
    private injector: Injector) {
  }

  ngOnInit(): void {
    this.fields = driverFields();
  }

  ngOnChanges() {
    this.driver = { ...this.driver };
    this.fields = driverFields();
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

 
submit() {
  if (this.form.valid) {
    this.isLoading=true;
    var svc;
    this.driver.id ? svc = this.service.putDriver( this.driver) : 
    svc = this.service.postDriver( this.driver);
    svc.subscribe(res => {
      this.notification.success('Saved', 'Driver Saved Successfully!', { nzDuration: 10000 });
      this.isLoading=false;
      this.output.emit(res); 
      this.toggle(false);
      this.fileList = []
    },error=>{
      this.isLoading=false;
      if(error && error.error && error.error.message){
        this.notification.error('Error', error.error.message);
        
      }
    }).add(() => {
      this.isLoading = false; 
    });
  }
}
  

}
