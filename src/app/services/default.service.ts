import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DefaultService {
  baseUrl='http://16.16.205.235:8022'
  static NAME = 'token';
  static TOKEN: string;
  token: string;
  tokenPayload: any;

    constructor(public jwtHelper: JwtHelperService,private permissionsService:NgxPermissionsService, private http: HttpClient) {
      this.token = DefaultService.TOKEN = <string>this.getToken();
      if (!this.token) return;
      this.setTokenPayload();
     
    }
  
    setToken(token: string) {
      this.token=token;
      sessionStorage.setItem(DefaultService.NAME, token)
  }
  
  getToken() {
      return sessionStorage.getItem(DefaultService.NAME)
      
  }
  
  public setTokenPayload() {
    this.tokenPayload = this.decodeToken();
    if (this.tokenPayload) {
      const role = this.tokenPayload?.resource_access?.backend?.roles;
      const user = this.tokenPayload.sub;
      this.permissionsService.loadPermissions([role]);
    } else {
      let data: any = {};
      this.tokenPayload = data;
    }
  }
  
  public clearToken() {
      sessionStorage.clear();
  }
  
  public decodeToken() {
    const decodedToken= this.jwtHelper.decodeToken(this.token)
      return decodedToken;
  }
  
  public isAuthenticated():boolean {
      return !this.jwtHelper.isTokenExpired(this.token);
  }
  
  public isLoggedIn(){
      return this.getToken() ? true : false
  }
  
login(user :any):Observable<any>{
      return this.http.post<any>(`${this.baseUrl}/auth/login`,user)
   
  }

  postBus(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/bus/add_new`, data)

  }

  putBus( data: any):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/bus/update`, data)
  }
  getAllBus():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/bus/get_all_buses`)

  }
  getAllActiveBuses():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/bus/get_active_buses`)

  }

  getAllNotDispatched(){
    return this.http.get<any>(`${this.baseUrl}/bus/get_all_buses_not_dispatched`) 
  }
  
  postRoute(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/depot/add-routes`, data)

  }

  putRoute( data: any):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/depot/update_route`, data)
  }
  getAllRoutes():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/depot/get_all_routes`)

  }
  postDriver(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/driver/add_new`, data)

  }

  putDriver( data: any):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/driver/update`, data)
  }
  getAllDrivers():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/driver/get_all_Drivers`)

  }

  getAllUnAssignedDrivers():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/driver/not_assigned`)
  }

  getAllActiveDrivers():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/driver/get_active_drivers`)

  }


  postDispatch(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/depot/dispatch`, data)

  }

  putDispatch( data: any):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/depot/update`, data)
  }
  getAllDispatch():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/bus/get_all_dispatched_buses`)

  }

  dispenseFuel(fleetNumber:any){
    return this.http.get(`${this.baseUrl}/dispense_fuel/${fleetNumber}`)
  }

  getFuel():Observable<any>{
    return this.http.get(`${this.baseUrl}/bus/fuel_summary`)
  }
 
  deactivateDriver(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/driver/deactivate_driver?id=${id}`)
  }

  deactivateBus(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/bus/deactivate_bus?id=${id}`)
  }

  showFuelLevel():Observable<any>{
    return this.http.get(`${this.baseUrl}/depot/get_latest_fuel_level_at_depot`)
  }

  showSpeed():Observable<any>{
    return this.http.get(`${this.baseUrl}/bus/get_speed`)

  }
}
  
  
