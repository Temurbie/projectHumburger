import { Injectable, OnInit } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { BehaviorSubject } from 'rxjs';
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
  
  // upIncrement(){
  //   ++this.increment;
  //   this.sendIncrement$.next(this.increment)
  // }
  addProduct(card : CardInterface){
    this.addedProdocts.push(card);
    this.prodocts$.next(this.addedProdocts);
  }
}
