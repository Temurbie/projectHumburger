import { AfterViewInit, Component, effect, Inject, inject, OnInit, PLATFORM_ID} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { gsap } from 'gsap';
import { UserComponent } from "./user/user.component";
import { ListsComponent } from "./lists/lists.component";
import { MenuComponent } from "../profile/menu/menu.component";
import { SupportComponent } from "./support/support.component";
import { ProfileService } from '../../service/profile/profile.service';
import { HistoryComponent } from "./history/history.component";
import { PromoComponent } from "./promo/promo.component";
import { InviteComponent } from "./invite/invite.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    MatSidenavModule,
    UserComponent,
    ListsComponent,
    MenuComponent,
    RouterOutlet,
    SupportComponent,
    HistoryComponent,
    PromoComponent,
    InviteComponent
],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements AfterViewInit, OnInit {
 constructor(@Inject(PLATFORM_ID) private platformId: Object){}
 
 authService = inject(AuthService);
 route = inject(Router)
 profileService = inject(ProfileService)
 
 
 userName!:string
 userData!:string
 isHelp:boolean = false;
 support:string = 'support'
 counter:number = 0;
 
 ngOnInit(): void {
    this.userLink();
    this.animationChangeComponentHelp()
 }
  ngAfterViewInit(): void {
   
  }
 
  //methods and function
  logOut(): void{
    this.authService.logOut();
    this.route.navigate(['/']);
  }
  userLink(){
    setTimeout(() => {
      const sideNav = document.getElementById("side-nav")
      const menu = document.getElementById("menu")
      const user = document.getElementById("main")
      const support = document.getElementsByClassName('support')
      if (sideNav || menu || user || support) {
        gsap.fromTo(
          [sideNav, user, menu, support],
          { opacity: 0, y: -100 }, // Boshlanish nuqtasi
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.5} // Tugash nuqtasi
        );
      }
    }, 1);
  }
  animationChangeComponentHelp(){
    this.profileService.showHelp$.subscribe(state =>{
      console.log("profile" ,state)
      this.isHelp = state
      this.counter++
      setTimeout(() => {
        const support = document.getElementsByClassName('support')
        const user = document.getElementById("main")
        if(state === true && this.counter >= 2){
          gsap.fromTo(support,
            {opacity: 0, y: -100},
            { opacity: 1, y: 0, duration: 1, stagger: 1 }
          )
        }if (state ==false && this.counter >= 2) {
          gsap.fromTo(user,
            {opacity: 0, y: -100},
            { opacity: 1, y: 0, duration: 1, stagger: 1 })
        }
      }, 1);
     })
  }
}

