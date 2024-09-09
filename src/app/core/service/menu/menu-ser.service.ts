import { inject, Injectable } from '@angular/core';
import { CardInterface } from '../../interfaces/card-interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuSerService {
  // injects and Variables
  httpClient = inject(HttpClient)
  apiUrl = 'http://localhost:3000'
  nestPRoduct: CardInterface[] =[];
  products: CardInterface[] = this.nestPRoduct.flat();
  cardHamburger$ = new BehaviorSubject<CardInterface[]>(this.products);

    //methods and functions 
  getProducts(): Observable<CardInterface> {
    return this.httpClient.get<CardInterface>(`${this.apiUrl}/products`);
  }
  
  getItem(){
    return this.products
  }

}
