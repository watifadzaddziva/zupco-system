import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, UntypedFormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user  = new User();
  view!: boolean;
  returnUrl!: string;
  passwordVisible: boolean = false;;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  token!: string;
  tokenInfo: any;



constructor(private fb: UntypedFormBuilder,  private router : Router,
   private route : ActivatedRoute,
  
  private notification : NzNotificationService, ){}
 

  ngOnInit(): void {
  // this.authService.clearToken();
if(sessionStorage.getItem('refresh-session'))
    sessionStorage.removeItem('refresh-session')  
  }

  submitForm() {
    // this.authService.loginUserFromServer(this.user).subscribe((data )=>{
    // let tok= data.token;
    // let userData: {};
    // userData=data
    // this.authService.setToken(tok)
    // sessionStorage.setItem('user_data', JSON.stringify((userData)));
    // this.navigateToReturnUrl();
    // }, (error: HttpErrorResponse) => {
    //   this.authService.clearToken();
    //   if (error.status == 401 || error.status==400){
    //     this.notification.error('Incorrect Username or Password','')
    //   }else{
    //     this.notification.error('Server Unavailable: Please try again later','')
    //   }

    // });
   }
 

  toggleView() {
    this.view = !this.view;
  }

  navigateToReturnUrl(): void{
    if(this.returnUrl){
      this.router.navigateByUrl(this.returnUrl);
    }else{
      this.router.navigate(['/welcome'])
    }
  }

}
export class User {

  id !: string;
  lastName !: string;
  firstName !: string;
  email !: string;
  username !: string;
  password !: string;
  token!: string;
  message!:string;

}