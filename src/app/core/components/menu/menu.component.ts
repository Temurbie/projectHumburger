import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { map, Subject } from 'rxjs';

import { MenuSerService } from '../../service/menu/menu-ser.service';
import { CardInterface } from '../../interfaces/card-interface';
import { CardComponent } from './card/card.component';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatTabsModule,
    
    CommonModule,
    CardComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  //injects
  menuService = inject(MenuSerService)

  //variables
  fastFoods:CardInterface[] = [];
  ichimliklar:CardInterface[] = [];
  setBurgers:CardInterface[] = [];
  
  
  //functions and methods
  ngOnInit(){
  this.getProducts();
  };
  getProducts(): void{
    this.menuService.cardHamburger$.
    pipe(
      map(prod =>{
        return prod.flat();
      })
    )
    .subscribe((prod : CardInterface[])=>{
      this.fastFoods = prod.filter(product => product.category === "fastFoods")
      this.ichimliklar =prod.filter(product => product.category === "Ichimliklar"),
      this.setBurgers = prod.filter(product => product.category === "setBurger")
    })
  }
}


