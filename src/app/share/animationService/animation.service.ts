import { Injectable, OnInit } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { BehaviorSubject, find, identity } from 'rxjs';
import { CardInterface } from '../../core/components/menu/card/models/card-interface';

@Injectable({
  providedIn: 'root'
})
export class AnimationService implements OnInit {
  addedProdocts: CardInterface[] = [];
  prodocts$ = new BehaviorSubject<CardInterface[]>(this.addedProdocts)


  constructor() { }
  increment:number = 0;
  
  sendIncrement$ = new BehaviorSubject<number>(this.increment)
  
  ngOnInit(): void {
  }
  
  decrement(){
    this.increment -= 1;
    this.sendIncrement$.next(this.increment);
  }

  upIncrement(){
    ++this.increment;
    this.sendIncrement$.next(this.increment)
  }
  addProduct(card : CardInterface){
    let cardId = card.id;
    let addedProducrId = this.addedProdocts.map(pro => pro.id);
    if(addedProducrId.includes(cardId)){
    }else{
      this.addedProdocts.push(card)
      this.upIncrement();
    }
  }
}
// this.prodocts$.next(this.addedProdocts);
// let foundIndex : number | null
// const findProduct = this.addedProdocts.find((pro, index) =>{
//   const condition = pro.id === card.id;
//   foundIndex = condition ? index : null
//   return condition;
// })
// if(findProduct){
// }else{
//   console.log(false);
//   this.upIncrement();
//   this.addedProdocts.push(card);
  
// }
