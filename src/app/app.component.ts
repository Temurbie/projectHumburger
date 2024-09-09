import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './core/service/auth/auth.service';


import { NavComponent } from "./core/components/nav/nav.component";
import { FooterComponent } from "./core/components/footer/footer.component";
import { MainContentComponent } from "./core/components/main-content/main-content.component";
import { MenuSerService } from './core/service/menu/menu-ser.service';
import { CardInterface } from './core/interfaces/card-interface';
import { map } from 'rxjs';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavComponent, FooterComponent, MainContentComponent]
})
export class AppComponent implements OnInit{

  //injects
  authService = inject(AuthService)
  menuService = inject(MenuSerService)
  route = inject(Router)

  //functions
  ngOnInit(): void {
    this.getProductsTheApi();
    this.checkUser();
  };
  
  getProductsTheApi():void{
    this.menuService.getProducts().pipe(
      map(nestedArray=>{
        return nestedArray.flat()
      })
    ).subscribe((prod:CardInterface)=>{
      this.menuService.products.push(prod)
    })
  }

  checkUser():void{
    var getToken = localStorage.getItem('token');
    if(this.authService.isLoggedIn()){
      this.authService.isLoginInUser.next(true)
    }else{
      this.route.navigate(['/'])
    }

  }
  title = 'Humberger';
}
