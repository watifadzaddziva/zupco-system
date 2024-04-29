import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { DefaultService } from './services/default.service';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/login'},
  {path:'login', component:LoginComponent},
  {path:'welcome',loadChildren:()=> import('./pages/welcome/welcome.module').then(m=>m.WelcomeModule)},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[DefaultService]
})
export class AppRoutingModule { }
