import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { FormGroup, UntypedFormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultService } from '../../../../services/default.service';
import { dispenseFields } from '../../forms/dispense.fuel.fields';

@Component({
  selector: 'app-dispense-fuel',
  templateUrl: './dispense-fuel.component.html',
  styleUrl: './dispense-fuel.component.css'
})
export class DispenseFuelComponent {
  visible = false;
  form = new UntypedFormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() dispatch!: any;
  @Output() output = new EventEmitter();
  fileList: any = [];
  options: any;
  isLoaded:boolean= false;
  isLoading:boolean=false;
  routes:any;
  fleet:any;


  constructor(private service: DefaultService, 
    private notification: NzNotificationService, 
    private injector: Injector) {
  }

  ngOnInit(): void {
    this.getAll();
    this.fields = dispenseFields(this.fleet);
  }

  ngOnChanges() {
    this.dispatch = { ...this.dispatch };
    this.fields = dispenseFields(this.fleet);
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

 
submit() {
  if (this.form.valid) {
    this.isLoading=true;
    var svc; 
    svc = this.service.dispenseFuel( this.form.value.fleetNumber);
    svc.subscribe(res => {
      this.notification.success('Saved', 'Fuel Dispensed Successfully!', { nzDuration: 10000 });
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

getAll() {
this.service.getAllDispatch()
 .subscribe((bus) => {
    this.fleet = bus.map((bus: any) => {
      return { label: bus.fleetNumber, value: bus.fleetNumber };
    });

    this.fields = dispenseFields(this.fleet);
  });
}
}