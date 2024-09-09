import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  authService = inject(AuthService);
  route = inject(Router)
  
  logOut(): void{
    this.authService.logOut();
    this.route.navigate(['/']);
  }

}
