import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DeregisterService } from '@bierrallye/registration/data-access';
import { ToastrService } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'bierrallye-registration-feature-deregister',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './deregister.component.html',
  styleUrls: ['./deregister.component.scss'],
})
export class DeregisterComponent {
  deregisterForm = new FormGroup({
    token: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(36),
        Validators.maxLength(36),
      ],
      nonNullable: true,
    }),
  });

  constructor(
    private deregisterService: DeregisterService,
    private toastr: ToastrService
  ) {}

  deregister(): void {
    this.deregisterService
      .deregister(this.deregisterForm.getRawValue())
      .subscribe({
        next: () => {
          this.toastr.success(
            'Schade, dass ihr eure Teilnahme storniert habt',
            'Erfolgreich'
          );
        },
        error: (error) => {
          if (error.status === 400) {
            this.toastr.warning('Ihr habt euch bereits abgemeldet', 'Achtung');
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
