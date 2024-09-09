import { CommonModule } from '@angular/common';
import {  Component, OnInit,  } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';
import { ApiResponseTypes } from '../../../interfaces/api-response-types';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authService : AuthService

  ){}
 
  ngOnInit(): void {
    // this.authService.getProtectedData().subscribe(
    //   data => {
    //     console.log('Himoyalangan ma\'lumotlar:', data);
    //   },
    //   error => {
    //     console.error('Xatolik:', error);
    //   }
    // );
  }
  signInForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })
  get f(){
    return this.signInForm!.controls
  }
  // onSubmitSignIn(){
  //   if(this.signInForm.valid){
  //     console.log(`invalid`, localStorage);
      
  //     const getEmailValue = this.signInForm.value.email;
  //     const getParolValue = this.signInForm.value.parol;
  //     const dataLocal = localStorage.getItem(`${getEmailValue}`)
  //     if(dataLocal){
  //       try{
  //         const getLocalValues = JSON.parse(dataLocal);
  //         console.log(`log`);
          
  //       if(getLocalValues.email === getEmailValue && getLocalValues.password === getParolValue){
  //         this.router.navigate(["/profile"])
  //         console.log(this.router.config);
  //         this.authService.login();
  //       }else{
  //         alert(`parol yoki login hato`);
  //       }
  //       }catch(error){
  //         console.error(error)
  //       }
        
  //     }
  //   }
  // }

  onSubmitSignIn() {
    const {email, password} = this.signInForm.value
    
    this.authService.login(email ?? 'test', password ?? 'test').subscribe(res =>{
      if(res.status === 200){
        const token  = res.token
        this.router.navigate(['/profile'])
        this.authService.isLoginInUser.next(true)
        this.authService.saveToken(token)
        console.log(`zur ${token}`);
      }else{
        alert(JSON.stringify(res.message))
      }
    })
     
    }
  }
  


// next: (res : ApiResponseTypes['loginResponse']) =>{
//   if(res.status === 200){
//     const token  = res.token
//     this.router.navigate(['/profile'])
//     this.authService.isLoginInUser.next(true)
//     this.authService.saveToken(token)
//     console.log(`zur ${token}`);
//   }else{
//     alert(JSON.stringify(res.message))
//   }
// },
// error:(error: HttpErrorResponse) =>{
//   alert(error.error.message)
  
// }