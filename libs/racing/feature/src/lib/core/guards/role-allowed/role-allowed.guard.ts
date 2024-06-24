import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '@bierrallye/shared/data-access';

export const roleAllowedGuard: CanActivateFn = (route) => {
  const userService = inject(UserService);
  const role = userService.user.value?.role;

  if (route.data['role'] === role) {
    return true;
  }

  userService.logout();
  return false;
};
