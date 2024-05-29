import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { BusesPageComponent } from './pages/buses-page/buses-page.component';
import { RoutesPageComponent } from './pages/routes-page/routes-page.component';
import { DriverPageComponent } from './pages/driver-page/driver-page.component';
import { DispatchComponent } from './components/dispatch/dispatch.component';
import { DispatchPageComponent } from './pages/dispatch-page/dispatch-page.component';
import { SetFuelLevelComponent } from './components/set-fuel-level/set-fuel-level.component';
import { ShowSpeedComponent } from './pages/show-speed/show-speed.component';
import { DispenseFuelComponent } from './components/dispense-fuel/dispense-fuel.component';

const routes: Routes = [
  {path: '', component:WelcomeComponent,
children:[
  {path:'', component:BusesPageComponent},
  {path:'bus', component:BusesPageComponent},
  {path:'route', component:RoutesPageComponent},
  {path:'driver', component:DriverPageComponent},
  {path:'dispatch', component:DispatchPageComponent},
  {path:'fuel', component:SetFuelLevelComponent},
  {path:'speed',component:ShowSpeedComponent},
  {path:'dispense', component:DispenseFuelComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
