import { Component, OnInit } from '@angular/core';
import {  ProductInCart } from '../menu/card/models/card-interface';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  constructor(private cartService :CartService){}

  cartProductsList: ProductInCart [] =[];

  ngOnInit(): void {
    this.cartService.cartProducts$.subscribe(product=>{
      this.cartProductsList = product;
    })
  }
  
}
