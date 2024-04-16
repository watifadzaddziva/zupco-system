import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { MotorDataComponent } from './pages/motor-data/motor-data.component';
import { ThresholdPageComponent } from './pages/threshold-page/threshold-page.component';
import { MasterComponent } from '../../reports/master/master.component';

const routes: Routes = [
  {path: '', component:WelcomeComponent,
children:[
  {path:'', component:MotorDataComponent},
  {path:'motor', component:MotorDataComponent},
  {path:'threshold', component:ThresholdPageComponent},
  {path:'reports', component:MasterComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
