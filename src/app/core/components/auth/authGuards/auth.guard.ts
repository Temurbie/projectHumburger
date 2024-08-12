import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';




export const authGuard: CanActivateFn = (route, state) => {
    return inject(AuthService).authenticated()
    ? true
    : inject(Router).navigate(['/menu'])

};
