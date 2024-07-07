import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { PenaltyStoreService } from '@bierrallye/racing/data-access';
import { ToastrService } from 'ngx-toastr';

export const stationGuard: CanActivateFn = async (route) => {
  const penaltyService = inject(PenaltyStoreService);
  const toastrService = inject(ToastrService);

  const hasPrivileges = await penaltyService.hasPrivileges(
    route.params['stationId']
  );

  if (!hasPrivileges) {
    toastrService.error('Du hast keine Berechtigung für diese Station.');
  }

  return hasPrivileges;
};
