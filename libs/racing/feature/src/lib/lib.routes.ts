import { Route } from '@angular/router';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { RaceComponent } from './race/race.component';
import { LiveOverviewComponent } from './live-overview/live-overview.component';
import { CreatePenaltyComponent } from './penalty/create-penalty/create-penalty.component';
import { Role } from '@bierrallye/shared/data-access';
import { roleAllowedGuard } from './core/guard/role-allowed/role-allowed.guard';
import { stationGuard } from './core/guard/station/station.guard';

export const racingRoutes: Route[] = [
  {
    path: 'onboarding',
    component: OnboardingComponent,
    data: { role: Role.ADMIN },
    canActivate: [roleAllowedGuard],
  },
  {
    path: 'race',
    component: RaceComponent,
    data: { role: Role.USER },
    canActivate: [roleAllowedGuard],
  },
  {
    path: 'penalty',
    component: PenaltyComponent,
    children: [
      {
        path: ':stationId',
        component: CreatePenaltyComponent,
        canActivate: [stationGuard],
      },
    ],
    data: { role: Role.EMPLOYEE },
    canActivate: [roleAllowedGuard],
  },
  { path: 'evaluation', component: EvaluationComponent },
  {
    path: 'overview',
    component: LiveOverviewComponent,
    data: { role: Role.ADMIN },
    canActivate: [roleAllowedGuard],
  },
];
