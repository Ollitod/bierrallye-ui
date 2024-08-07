import { Route } from '@angular/router';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { RaceComponent } from './race/race.component';
import { LiveOverviewComponent } from './live-overview/live-overview.component';
import { CreatePenaltyComponent } from './penalty/create-penalty/create-penalty.component';
import { Role } from '@bierrallye/shared/data-access';
import { roleAllowedGuard } from './core/guards/role-allowed/role-allowed.guard';
import { stationGuard } from './core/guards/station/station.guard';
import { authGuard } from './core/guards/auth/auth.guard';
import { StationListComponent } from './penalty/station-list/station-list.component';

export const racingRoutes: Route[] = [
  {
    path: 'onboarding',
    component: OnboardingComponent,
    data: { role: Role.ADMIN },
    canActivate: [authGuard, roleAllowedGuard],
  },
  {
    path: 'race',
    component: RaceComponent,
    data: { role: Role.USER },
    canActivate: [authGuard, roleAllowedGuard],
  },
  {
    path: 'penalty',
    component: PenaltyComponent,
    children: [
      {
        path: '',
        component: StationListComponent,
      },
      {
        path: ':stationId',
        component: CreatePenaltyComponent,
        canActivate: [stationGuard],
      },
    ],
    data: { role: Role.EMPLOYEE },
    canActivate: [authGuard, roleAllowedGuard],
  },
  { path: 'evaluation', component: EvaluationComponent },
  {
    path: 'overview',
    component: LiveOverviewComponent,
    data: { role: Role.ADMIN },
  },
];
