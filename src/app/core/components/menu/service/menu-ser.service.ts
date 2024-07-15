import { Injectable } from '@angular/core';
import { CardInterface } from '../card/models/card-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuSerService {

  constructor() { }

  cards: CardInterface[] = [
    {
      title: 'Hamburger',
      subTitle: 'American Brend',
      imgLogo: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      imgMain: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: 'Uch qavatdan iborat "America Hamburgeri"',
      price: 100,
      sale: 3,
      category: 'fastFoods',
      id:1,
    },
    {
      title: 'Hamburger',
      subTitle: 'American Brend',
      imgLogo: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      imgMain: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: 'Uch qavatdan iborat "America Hamburgeri"',
      price: 100,
      sale: 3,
      category: 'Ichimliklar',
      id:2,
    },
    {
      title: 'Hamburger',
      subTitle: 'American Brend',
      imgLogo: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      imgMain: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: 'Uch qavatdan iborat "America Hamburgeri"',
      price: 100,
      sale: 3,
      category: 'setBurger',
      id:3,
    },
 
  ];
  cardHamburger$ = new BehaviorSubject<CardInterface[]>(this.cards)

}
