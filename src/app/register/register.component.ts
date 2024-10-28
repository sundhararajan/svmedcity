import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  loading:boolean=false;
  errorMessage='';
  submit:boolean=false;

  constructor(private auth:AuthService, private router:Router){

  }

  formdata = {name:'', email:'', password:''}
  
  
  onSubmit(){ 
     this.loading=true;
     this.auth.register(this.formdata.email, this.formdata.password).subscribe({
      next:data=>{
       this.auth.storetoken(data.idToken);
       console.log('idtoken' + data.idToken);
       this.loading=false;
       this.errorMessage = 'Registration Complete';
       this.auth.gotologin();
      },
      error:data=>{
        if(data.error.error.message == 'INVALID_EMAIL'){
          this.loading=false;
          this.errorMessage = 'Invalid Email!'
        }else if(data.error.error.message == 'EMAIL_EXISTS'){
          this.loading=false;
          this.errorMessage = 'Already Exist Email'
        }else{
          this.loading=false;
          this.errorMessage = "Unknown error occured when creating this account!";
        }
      }
     })

    // this.reset();
  }

  reset(){
    this.formdata.email='';
    this.formdata.name='';
    this.formdata.password='';
  }

}
