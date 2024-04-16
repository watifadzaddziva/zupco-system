import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  isCollapsed = false;
  @Input() leaveToApproveCountChange!: number;
  user!:string;
  first_name!:string;

  constructor( private router:Router,private service:DefaultService) {
   
   }

   openMap:{[name:string]:boolean}={
    sub:false
   }

  ngOnInit() {

if (this.service.isAuthenticated()) {
    this.service.setTokenPayload();
    this.user = this.service.tokenPayload?.preferred_username;
  }

  }
  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }


  logout(){
    window.location.href='/'
    sessionStorage.clear();
  
  }

}
