import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SetDriverComponent } from './components/set-driver/set-driver.component';
import { SetNewRouteComponent } from './components/set-new-route/set-new-route.component';
import { SetNewBusComponent } from './components/set-new-bus/set-new-bus.component';
import { DriverPageComponent } from './pages/driver-page/driver-page.component';
import { BusesPageComponent } from './pages/buses-page/buses-page.component';
import { RoutesPageComponent } from './pages/routes-page/routes-page.component';
import { SetFuelLevelComponent } from './components/set-fuel-level/set-fuel-level.component';
import { DispatchComponent } from './components/dispatch/dispatch.component';
import { DispatchPageComponent } from './pages/dispatch-page/dispatch-page.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ShowSpeedComponent } from './pages/show-speed/show-speed.component';


@NgModule({
  declarations: [
    SetDriverComponent,
    SetNewRouteComponent,
    SetNewBusComponent,
    DriverPageComponent,
    BusesPageComponent,
    RoutesPageComponent,
    SetFuelLevelComponent,
    DispatchComponent,
    DispatchPageComponent,
    ShowSpeedComponent,
    
  ],
  imports: 
  [
    WelcomeRoutingModule
    ,FormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzDrawerModule,
    NzFormModule,
   NzDatePickerModule ,
   NzButtonModule,
   NzInputModule ,
   NzSelectModule,
   ReactiveFormsModule,
   NzTableModule,
   NzCardModule,
   FormlyNgZorroAntdModule,
   FormlyModule,
   NgxPermissionsModule,
   NzInputNumberModule,
   NzGridModule,
   NzFlexModule,
   NzImageModule,
   NzAvatarModule,
   NzPaginationModule,
   NzIconModule,NzProgressModule,
   NzPopconfirmModule,

  ]
})
export class WelcomeModule { }
