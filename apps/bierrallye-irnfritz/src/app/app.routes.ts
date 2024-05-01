import { Route } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { authGuard } from './shared/guards/auth/auth.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'registration',
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'verify',
    loadComponent: () =>
      import('./registration/verification/verification.component').then(
        (c) => c.VerificationComponent
      ),
  },
  {
    path: 'impressum',
    loadComponent: () =>
      import('./impressum/impressum.component').then(
        (c) => c.ImpressumComponent
      ),
  },
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./onboarding/onboarding.component').then(
        (c) => c.OnboardingComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'race',
    loadComponent: () =>
      import('./race/race.component').then((c) => c.RaceComponent),
    canActivate: [authGuard],
  },
  {
    path: 'evaluation',
    loadComponent: () =>
      import('./evaluation/evaluation.component').then(
        (c) => c.EvaluationComponent
      ),
  },
  {
    path: 'penalty',
    loadComponent: () =>
      import('./penalty/penalty.component').then((c) => c.PenaltyComponent),
  },
  {
    path: 'qr-login',
    loadComponent: () =>
      import('./qr-login/qr-login.component').then((c) => c.QrLoginComponent),
  },
];
