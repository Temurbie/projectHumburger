import { AfterViewInit, Component, ElementRef, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { AnimateDirective } from '../../../directives/animate.directive';
import { gsap } from 'gsap';
import SplitType from 'split-type'
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder,  Validators, ReactiveFormsModule, ValidatorFn, AbstractControl, ValidationErrors, AbstractControlOptions } from '@angular/forms';
import { Login } from './login';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AnimateDirective,
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(
  private el: ElementRef,
  private ngZone: NgZone, 
  @Inject(PLATFORM_ID) private platformId: Object,
  private fb : FormBuilder
) { }
  

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger)
      this.textAnime();
      this.leftGoAnime();
      this.rigthgoAnime();
      this.formAnime()
    }
  }
  ngOnInit(): void {
    console.log(this.userForm.controls)
  }
  
  checkPassword: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get('password')?.value;
    const coniformPassword = formGroup.get('cPassword')?.value;
    
    if (password != coniformPassword) {
      return { mismatch: true };
    }
    
    return null;
  }
  // testCheck = this.f.password.value !== this.f.cPassword.value ? false : true
  
  
    userForm  = this.fb.group({
    ism: [ '', Validators.required],
    lName: [ '', Validators.required],
    email: [ '', [Validators.required, Validators.minLength(10), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$")]],
    password: ['', [Validators.required, Validators.minLength(7)]],
    cPassword: ['', [Validators.required, Validators.minLength(7)]]
  }, { validators: this.checkPassword});

  textAnime() {

    this.ngZone.runOutsideAngular(() => {
      let typeSplit = new SplitType('[animate]', {
        types: ['lines'],
        tagName: 'span'
      })
      gsap.from('[animate] .line', {
        y: '100%',
        opacity: 0,
        duration: 10,
        ease: 'back.out',
        stagger: 0.3,
      })
    })
  }

  leftGoAnime() {
    gsap.fromTo('.img', {
      display: "inline-block",
      x: 0,
      duration: 3,
    },
    {
      x: 1000,
      display: "none",
      // visibility: "hidden",
      scrollTrigger: {
        trigger: '.img',
        start: 'top 10%',
        // markers: true,
        scrub: true,
        // pin: true,
      }
    })
  }

  rigthgoAnime() {
    gsap.to('.info', {
      x: -700,
      duration: 3,
      scrollTrigger: {
        trigger: '.info',
        start: 'top 10%',
        // markers: true,
        scrub: true,
        // pin: true

      }
    })
  }
  formAnime(){
    gsap.to('.login-wrapper',{
      visibility: "visible",
      scrollTrigger:{
        trigger:'.login-wrapper',
        start: "top 50%",
        // markers: true,
        scrub: true
      }
    })
  }
  // fomrGruop
  get f (){
    return this.userForm!.controls
  }
  

  onSubmit(){ 
    if(this.userForm.valid){

      const { ism, password, email } = this.userForm.value;

      const formData = { ism, password, email};
      
      localStorage.setItem(`user${formData.ism}`, JSON.stringify(formData))
      
      alert(`Ruyhatdan Muovfaqatli uttingiz`)
      this.userForm.reset();

    }else{
      alert(`Parol yoki Email hato`)
    }
  }

 
}


