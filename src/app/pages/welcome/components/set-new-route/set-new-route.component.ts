import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultService } from '../../../../services/default.service';
import { routeFields } from '../../forms/route.field';

@Component({
  selector: 'app-set-new-route',
  templateUrl: './set-new-route.component.html',
  styleUrl: './set-new-route.component.css'
})
export class SetNewRouteComponent {

  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() route!: any;
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
    this.fields = routeFields();
  }

  ngOnChanges() {
    this.route = { ...this.route };
    this.fields = routeFields();
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

 
submit() {
  if (this.form.valid) {
    this.isLoading=true;
    var svc;
    this.route.id ? svc = this.service.putRoute( this.route) : 
    svc = this.service.postRoute( this.route);
    svc.subscribe(res => {
      this.notification.success('Saved', 'Route Saved Successfully!', { nzDuration: 10000 });
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
