import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CardInterface, ProductInCart } from './models/card-interface';
import { AnimationService } from '../../../../share/animationService/animation.service';
import { CartService } from '../../cart/cart.service';
import { AnimateDirective } from '../../../directives/animate.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    AnimateDirective
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  constructor(private animeService: AnimationService, private cartService: CartService) { }

  @Input() card!: CardInterface;

  ngOnInit(): void {
    ;
  }

  addCard(card: CardInterface) {
    this.animeService.addProduct(card);
    this.cartService.addCartProduct(card as ProductInCart);
  }
}
