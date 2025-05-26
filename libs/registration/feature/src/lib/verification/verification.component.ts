import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { RegistrationApiService } from '@bierrallye/registration/data-access';

@Component({
  selector: 'bierrallye-registration-feature-verification',
  standalone: true,
  imports: [],
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerificationComponent {
  private route = inject(ActivatedRoute);
  private registrationApiService = inject(RegistrationApiService);
  private toastr = inject(ToastrService);

  successful = signal(false);
  loading = signal(true);

  constructor() {
    this.route.queryParams
      .pipe(
        switchMap((params) => {
          const token = params['token'];
          return this.registrationApiService.verify(token);
        })
      )
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          this.successful.set(true);
          this.toastr.success(res, 'Erfolgreich');
        },
        error: (error) => {
          this.loading.set(false);
          if (error.status === 400) {
            this.toastr.warning(error.error, 'Achtung');
          } else {
            this.toastr.error(
              'Ein unbekannter Fehler ist aufgetreten',
              'Fehler'
            );
          }
        },
      });
  }
}
