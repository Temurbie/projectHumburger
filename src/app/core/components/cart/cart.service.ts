import { Injectable, OnInit } from '@angular/core';
import { CardInterface, ProductInCart } from '../menu/card/models/card-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  constructor() { }

  cartProducts : ProductInCart [] = []; 
  cartProducts$ = new BehaviorSubject<ProductInCart[]>(this.cartProducts)

  ngOnInit(): void {
    
    
  }
  quantity(product : ProductInCart){
    let incrementValue = 1;
    let pro = this.cartProducts.find(p => p.id === product.id);
    if(pro){
      pro.quantity += incrementValue
    }
  }
  dinc(product : ProductInCart){
    const decrementValue = 1;
    let  decrement = this.cartProducts.find(p => p.id === product.id)
    if(decrement && decrement.quantity > 0){
      decrement.quantity -= decrementValue;
    }
  
  }

  addCartProduct(product : ProductInCart){
    // debugger
    let foundIndex : number | null;
    const findIdProduct = this.cartProducts
    .find((pro, index) => {
      const condition = pro.id === product.id
     foundIndex = condition ? index : null
     return condition
    })
    
    if(findIdProduct){
      this.cartProducts[foundIndex!].quantity += 1
    }else{
      product.quantity = 1
      this.cartProducts.push(product);      
    }
  
    this.cartProducts$.next(this.cartProducts);
  }

  getItems(){
    return this.cartProducts
  }
} 
