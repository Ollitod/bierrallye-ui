import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TokenService } from '@bierrallye/shared/data-access';

export const tokenInterceptor: HttpInterceptorFn = (request, next) => {
  const tokenService = inject(TokenService);
  const toastrService = inject(ToastrService);
  const router = inject(Router);

  const token = tokenService.getToken();
  if (!token) {
    return next(request);
  }

  if (tokenService.isExpired()) {
    // Token has expired, remove it from local storage and redirect to login page
    tokenService.removeToken();
    toastrService.warning('Token abgelaufen. Bitte erneut anmelden', 'Achtung');
    void router.navigate(['/login']);
    return next(request);
  }

  request = request.clone({
    setHeaders: {
      Authorization: `${token}`, // Set the token in the Authorization header
    },
  });
  return next(request);
};
