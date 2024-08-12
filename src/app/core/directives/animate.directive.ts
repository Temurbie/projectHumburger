import { AfterViewInit, Directive, ElementRef, NgZone, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appAnimate]',
  standalone: true
})
export class AnimateDirective implements AfterViewInit, OnInit {
  
  constructor(private  el : ElementRef, private ngZone:NgZone) { }
  ngOnInit(): void {
    this.animateLoginPage();
   
  }
  ngAfterViewInit(): void {
   
  }
   
  
    animateLoginPage(){
      this.ngZone.runOutsideAngular(() => {
        if (this.el.nativeElement) {
          gsap.to(this.el.nativeElement, {
            duration: 2,
            // x: 100,
            opacity: 1,
            scale: 1.2,
            repeat: -1,
            yoyo: true
          });
        } else {
          console.error('Element not found for animation');
        }
      });
    }
  }
  


