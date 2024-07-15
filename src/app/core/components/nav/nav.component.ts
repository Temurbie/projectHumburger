import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AnimationService } from '../../../share/animationService/animation.service';
import { CardInterface } from '../menu/card/models/card-interface';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterLink,
    CommonModule,
    RouterOutlet,
    RouterLinkActive
  ]
})
export class NavComponent implements OnInit {

  constructor(private aminService: AnimationService){}

  @Input() increment:number  = 0


  ngOnInit(): void {
    // this.aminService.sendIncrement$.subscribe((increment) =>{
    //   this.increment = increment
    // })

    this.aminService.prodocts$.subscribe((products)=>{
      this.increment = products.length
    })
   
    
  }

}
