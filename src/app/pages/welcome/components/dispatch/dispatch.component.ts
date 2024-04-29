import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultService } from '../../../../services/default.service';
import { driverFields } from '../../forms/driver.field';
import { dispatchFields } from '../../forms/dispathc.fields';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrl: './dispatch.component.css'
})
export class DispatchComponent {
  visible = false;
  form = new FormGroup({});
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
    this.fields = dispatchFields(this.routes,this.fleet);
  }

  ngOnChanges() {
    this.dispatch = { ...this.dispatch };
    this.fields = dispatchFields(this.routes,this.fleet);
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

 
submit() {
  if (this.form.valid) {
    this.isLoading=true;
    var svc;
    this.dispatch.id ? svc = this.service.putDispatch( this.dispatch) : 
    svc = this.service.postDispatch( this.dispatch);
    svc.subscribe(res => {
      this.notification.success('Saved', 'Dispatched Successfully!', { nzDuration: 10000 });
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
  forkJoin([
    this.service.getAllRoutes(),
    this.service.getAllNotDispatched()
  ]).subscribe(([route, bus]) => {
    
    this.routes = route.map((route: any) => {
      return { label: `${route.fromDestination}-${route.toDestination}`, value: route.id };
   });

    this.fleet = bus.map((bus: any) => {
      return { label: bus.fleetNumber, value: bus.fleetNumber };
    });

    this.fields = dispatchFields(this.routes, this.fleet);
  });
}
}