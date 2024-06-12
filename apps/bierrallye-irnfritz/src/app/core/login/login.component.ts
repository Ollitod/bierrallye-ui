import { Component, DestroyRef } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import {
  Auth,
  AuthService,
  Role,
  TokenService,
  UserService,
} from '@bierrallye/shared/data-access';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatCard, MatCardContent } from '@angular/material/card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] }),
  });

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private tokenService: TokenService,
    private userService: UserService,
    private route: ActivatedRoute,
    private destroyRef: DestroyRef
  ) {
    this.route.queryParams.subscribe((params) => {
      this.loginForm.controls.username.patchValue(params['username']);
      this.loginForm.controls.password.patchValue(params['uuid']);
    });
  }

  authenticate(): void {
    this.authService
      .authenticate(this.loginForm.getRawValue() as Auth)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        switchMap((response) => {
          this.tokenService.storeToken(response.token);
          this.userService.loginUser();
          return this.userService.user;
        })
      )
      .subscribe({
        next: (user) => {
          if (user?.role) {
            const routeByRole = this.getRouteByRole(user?.role);
            void this.router.navigate([routeByRole]);
            this.toastr.success('Login erfolgreich', 'Erfolgreich');
          }
        },
        error: () => {
          this.toastr.error('Username/Passwort falsch', 'Fehler');
        },
      });
  }

  private getRouteByRole(role: Role): string {
    switch (role) {
      case Role.ADMIN:
        return '/racing/onboarding';
      case Role.USER:
        return '/racing/race';
      case Role.EMPLOYEE:
        return '/racing/penalty';
      default:
        return '/';
    }
  }
}
