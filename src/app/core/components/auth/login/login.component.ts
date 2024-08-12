import { AfterViewInit, Component, ElementRef, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { AnimateDirective } from '../../../directives/animate.directive';
import { gsap } from 'gsap';
import SplitType from 'split-type'
import { isPlatformBrowser } from '@angular/common';
// import { ScrollTrigger } from 'gsap/all';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AnimateDirective
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef, private ngZone: NgZone,  @Inject(PLATFORM_ID) private platformId: Object) { }


  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger)
      this.textAnime();
      this.leftGoAnime();
      this.rigthgoAnime();
    }


  }
  ngOnInit(): void {
  }

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
    gsap.to('.img', {
      x: 700,
      duration: 3,
      scrollTrigger: {
        trigger: '.img',
        start: 'top top',
        markers: true,
        scrub: true,
        pin: true

      }
    })
  }

  rigthgoAnime() {
    gsap.to('.info', {
      x: -700,
      duration: 3,
      scrollTrigger: {
        trigger: '.info',
        start: 'top top',
        markers: true,
        scrub: true,
        pin: true


      }
    })
  }


}

