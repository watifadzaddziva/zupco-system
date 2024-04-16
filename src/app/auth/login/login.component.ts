import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  view!: boolean;
  returnUrl!: string;
  passwordVisible: boolean = false;;
  form = new FormGroup({ });
  token!: string;
  tokenInfo: any;



constructor(private fb: UntypedFormBuilder,  private router : Router,
   private route : ActivatedRoute,
   private service:DefaultService,
   public jwtHelper : JwtHelperService,
  private notification : NzNotificationService, ){}
 

  ngOnInit(): void {
this.form= this.fb.group({
  username:['',[Validators.required]],
  password:['',[Validators.required]]
})


  this.service.clearToken();
if(sessionStorage.getItem('refresh-session'))
    sessionStorage.removeItem('refresh-session')  
  }

  submitForm() {
    const dataToSend= this.form.value;
    this.service.login(this.form.value).subscribe((data )=>{
    let tok= data.access_token;
    this.service.setToken(tok)
    this.navigateToReturnUrl();
    }, (error: HttpErrorResponse) => {
      this.service.clearToken();
      if (error.status == 401 || error.status==400){
        this.notification.error('Incorrect Username or Password','')
      }else{
        this.notification.error('Server Unavailable: Please try again later','')
      }

    });
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