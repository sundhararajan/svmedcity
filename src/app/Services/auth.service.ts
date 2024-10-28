import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  
  
  constructor(private http:HttpClient, private router:Router) { }

  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null) {
        return true;
    } 
    return false;
  }

  removeToken(){

  }

  canAccess(){

  }

  gotologin(){
    alert('sdsd');
    this.router.navigate(['/login']);
  }

  register(email:string, password:string){
  return this.http
  .post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASMbxqvj4jbl9cQzP7ZpUDuuEA2IEaYEc',
  {email, password}
  )
  }

  storetoken(token:string){
    sessionStorage.setItem('token', token)
  }

}
