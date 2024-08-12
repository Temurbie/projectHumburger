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
      imgLogo: 'https://th.bing.com/th/id/OIP.E3ivSLils5JiWrxEInMoPgHaEK?rs=1&pid=ImgDetMain',
      imgMain: 'https://th.bing.com/th/id/R.8228b7ab97227ede454363fbec8ce86c?rik=8EBZvso91vj8ow&pid=ImgRaw&r=0',
      desc: 'Uch qavatdan iborat "America Hamburgeri"',
      price: 100,
      sale: 3,
      category: 'fastFoods',
      id:1,
    },
    {
      title: 'Hamburger',
      subTitle: 'American Brend',
      imgLogo: 'https://th.bing.com/th/id/OIP.E3ivSLils5JiWrxEInMoPgHaEK?rs=1&pid=ImgDetMain',
      imgMain: 'https://th.bing.com/th/id/R.8228b7ab97227ede454363fbec8ce86c?rik=8EBZvso91vj8ow&pid=ImgRaw&r=0',
      desc: 'Uch qavatdan iborat "America Hamburgeri"',
      price: 100,
      sale: 3,
      category: 'fastFoods',
      id:1,
    },
    {
      title: 'Hamburger',
      subTitle: 'American Brend',
      imgLogo: 'https://th.bing.com/th/id/OIP.E3ivSLils5JiWrxEInMoPgHaEK?rs=1&pid=ImgDetMain',
      imgMain: 'https://th.bing.com/th/id/R.8228b7ab97227ede454363fbec8ce86c?rik=8EBZvso91vj8ow&pid=ImgRaw&r=0',
      desc: 'Uch qavatdan iborat "America Hamburgeri"',
      price: 100,
      sale: 3,
      category: 'fastFoods',
      id:1,
    },
    {
      title: 'Hamburger',
      subTitle: 'American Brend',
      imgLogo: 'https://th.bing.com/th/id/OIP.E3ivSLils5JiWrxEInMoPgHaEK?rs=1&pid=ImgDetMain',
      imgMain: 'https://th.bing.com/th/id/R.8228b7ab97227ede454363fbec8ce86c?rik=8EBZvso91vj8ow&pid=ImgRaw&r=0',
      desc: 'Uch qavatdan iborat "America Hamburgeri"',
      price: 150,
      sale: 3,
      category: 'fastFoods',
      id:1,
    },

    {
      title: 'Hamburger',
      subTitle: 'American Brend',
      imgLogo: 'https://th.bing.com/th/id/OIP.E3ivSLils5JiWrxEInMoPgHaEK?rs=1&pid=ImgDetMain',
      imgMain: 'https://th.bing.com/th/id/R.8228b7ab97227ede454363fbec8ce86c?rik=8EBZvso91vj8ow&pid=ImgRaw&r=0',
      desc: 'Uch qavatdan iborat "America Hamburgeri"',
      price: 150,
      sale: 3,
      category: 'Ichimliklar',
      id:2,
    },
    {
      title: 'Hamburger',
      subTitle: 'American Brend',
      imgLogo: 'https://th.bing.com/th/id/OIP.E3ivSLils5JiWrxEInMoPgHaEK?rs=1&pid=ImgDetMain',
      imgMain: 'https://th.bing.com/th/id/R.8228b7ab97227ede454363fbec8ce86c?rik=8EBZvso91vj8ow&pid=ImgRaw&r=0',
      desc: 'Uch qavatdan iborat "America Hamburgeri"',
      price: 150,
      sale: 3,
      category: 'setBurger',
      id:3,
    },
 
  ];
  cardHamburger$ = new BehaviorSubject<CardInterface[]>(this.cards)

  getItem(){
    return this.cards
  }

}
