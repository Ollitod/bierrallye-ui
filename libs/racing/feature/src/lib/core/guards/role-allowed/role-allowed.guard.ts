import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '@bierrallye/shared/data-access';

export const roleAllowedGuard: CanActivateFn = async (route) => {
  const userService = inject(UserService);

  // FIXME: There might be some issues with the response time of the server when it is restarted
  // Fetch user if not already available, because it might be that the user
  // is not yet available when the guard is executed
  let user = userService.user();
  if (!user) {
    user = await userService.fetchUser();
  }

  const role = user.role;

  if (route.data['role'] === role) {
    return true;
  }

  userService.logout();
  return false;
};
