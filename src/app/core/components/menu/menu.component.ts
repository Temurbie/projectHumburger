import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

import { MenuSerService } from './service/menu-ser.service';
import { CardInterface } from './card/models/card-interface';
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
export class MenuComponent implements OnInit, OnDestroy{

  constructor(private menuService: MenuSerService){}

  fastFoods:CardInterface[] = [];
  ichimliklar:CardInterface[] = [];
  setBurgers:CardInterface[] = [];
  sub$ = new Subject;

  ngOnInit(): void {
    this.menuService.cardHamburger$.
    pipe(takeUntil(this.sub$))
    .subscribe((humburCard : CardInterface[])=>{
      this.fastFoods = humburCard.filter(product => product.category === "fastFoods"),
      this.ichimliklar =humburCard.filter(product => product.category === "Ichimliklar"),
      this.setBurgers = humburCard.filter(product => product.category === "setBurger")
    })

    
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete
  }
}
  
  


