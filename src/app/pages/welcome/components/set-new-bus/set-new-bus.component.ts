import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultService } from '../../../../services/default.service';
import { busFields } from '../../forms/bus.fields';

@Component({
  selector: 'app-set-new-bus',
  templateUrl: './set-new-bus.component.html',
  styleUrl: './set-new-bus.component.css'
})
export class SetNewBusComponent {
  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() bus!: any;
  @Output() output = new EventEmitter();
  fileList: any = [];
  options: any;
  isLoaded:boolean= false;
  isLoading:boolean=false;
  drivers:any;


  constructor(private service: DefaultService, 
    private notification: NzNotificationService, 
    private injector: Injector) {
  }

  ngOnInit(): void {
    this.fields = busFields(this.drivers);
    this.getDrivers();
  }

  ngOnChanges() {
    this.bus = { ...this.bus };
    this.fields = busFields(this.drivers);
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

 
submit() {
  if (this.form.valid) {
    this.isLoading=true;
    var svc;
    this.bus.id ? svc = this.service.putBus( this.bus) : 
    svc = this.service.postBus( this.bus);
    svc.subscribe(res => {
      this.notification.success('Saved', 'Bus Saved Successfully!', { nzDuration: 10000 });
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

getDrivers(){
  this.service.getAllDrivers().subscribe(res=>{
    this.drivers=res.map((driver:any)=>{
      return { label: `${driver.firstName} ${driver.lastName}`, value: driver.driverId };
    })
    this.fields=busFields(this.drivers)
  });

}

}
