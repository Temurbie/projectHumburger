import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AnimationService } from '../../../share/animationService/animation.service';
import { map } from 'rxjs';
import { CardInterface } from '../menu/card/models/card-interface';
import { AuthService } from '../../service/auth/auth.service';



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

  constructor(
    private aminService: AnimationService,
    private authService: AuthService
  ) { }

  @Input() increment: number = 0;
  products: CardInterface[] = [];
  foundIdexProductsList?: number;
  foundIndexGetProduct?: number;
  isLogin: boolean = true;


  ngOnInit(): void {
    this.authService.isLoginInUser.subscribe((bool) => {
      this.isLogin = bool
    })
    this.aminService.sendIncrement$.subscribe((increment) => {
      this.increment = increment
    })
  }
}