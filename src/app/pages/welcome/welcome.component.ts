import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor( private router:Router) {
   
   }

   openMap:{[name:string]:boolean}={
    sub:false
   }

  ngOnInit() {

// if (this.authService.isAuthenticated()) {
//     this.authService.setTokenPayload();
//     this.user = this.authService.tokenPayload?.sub;
//   }

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
