import { Route } from '@angular/router';
import { DeregisterComponent } from './deregister/deregister.component';
import { RegisterComponent } from './register/register.component';
import { VerificationComponent } from './verification/verification.component';

export const registrationRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'register' },
  { path: 'register', component: RegisterComponent },
  { path: 'deregister', component: DeregisterComponent },
  { path: 'verify', component: VerificationComponent },
];
