import { Component } from '@angular/core';
import { VerificationService } from '@bierrallye/registration/data-access';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'bierrallye-registration-feature-verification',
  standalone: true,
  imports: [],
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent {
  successful = false;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private verificationService: VerificationService,
    private toastr: ToastrService
  ) {
    this.route.queryParams
      .pipe(
        switchMap((params) => {
          const token = params['token'];
          return this.verificationService.verify(token);
        })
      )
      .subscribe({
        next: (res) => {
          this.loading = false;
          this.successful = true;
          this.toastr.success(res, 'Erfolgreich');
        },
        error: (error) => {
          this.loading = false;
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
