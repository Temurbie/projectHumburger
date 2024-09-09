import { Component, Input, OnInit } from '@angular/core';
import { CardInterface, ProductInCart } from '../../interfaces/card-interface';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart/cart.service';
import { AnimationService } from '../../service/animationService/animation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService, private animService: AnimationService,
    private route: ActivatedRoute
  ) { }
  haveCartProduct?: boolean;
  cartProductsList: ProductInCart[] = [];
  @Input() item!: number;
  @Input() product!: ProductInCart

  ngOnInit(): void {

    this.route.data.subscribe(data => console.log(data)
    )

    this.cartService.cartProducts$.subscribe(product => {
      this.cartProductsList = product;
    })
    this.checkProductList()
    this.animService.sendIncrement$.subscribe((inc) => {
      this.item = inc;
    })
  }

  checkProductList() {

    let i: number = 0
    const check = i === this.cartProductsList.length ? true : false
    this.haveCartProduct = check;
  }
  inc(product: ProductInCart) {
    this.cartService.quantity(product);
    // console.log(this.cartProductsList);

  }
  dinc(product: ProductInCart) {
    this.cartService.dinc(product);
    let chechdecrement = product.quantity === 0;
    if (chechdecrement) {
      this.animService.decrement();
      this.animService.addedProdocts.pop();
      this.haveCartProduct = true
    }
    console.log(this.cartService, this.animService);
  }
}
