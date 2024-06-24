import { Route } from '@angular/router';
import { InfoComponent } from './info/info.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'info',
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'impressum',
    loadComponent: () =>
      import('./impressum/impressum.component').then(
        (c) => c.ImpressumComponent
      ),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('@bierrallye/registration/feature').then(
        (m) => m.registrationRoutes
      ),
  },
  {
    path: 'racing',
    loadChildren: () =>
      import('@bierrallye/racing/feature').then((m) => m.racingRoutes),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'qr-login',
    loadComponent: () =>
      import('./core/qr-login/qr-login.component').then(
        (c) => c.QrLoginComponent
      ),
  },
];
