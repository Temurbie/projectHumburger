import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';
import {  switchMap } from 'rxjs';




export const authGuard: CanActivateFn = (route, state) => {
    
    const authService = inject(AuthService);
    const router = inject(Router);
  
    return authService.isLoginInUser.pipe(
      switchMap(isLoggedIn => {
        if (isLoggedIn) {
          return [true];
        } else {
          router.navigate(['/menu']);
          return [false];
        }
      })
    );

};
