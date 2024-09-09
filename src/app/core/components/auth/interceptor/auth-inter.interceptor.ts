import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../../service/auth/auth.service';
import { retry } from 'rxjs';


export const authInterInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  // const token = `test`
  
  if(token){
    
    
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        
      }
    })
  }
  return next(req).pipe(
    retry(1)
  );
};
