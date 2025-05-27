import {
  ChangeDetectionStrategy,
  Component,
  inject,
  viewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';
import {
  AvailableSpotsComponent,
  DsgvoDialogComponent,
} from '@bierrallye/registration/ui';
import {
  CreateParticipant,
  CreateRegistration,
  RegistrationFormTeamGroup,
} from '@bierrallye/shared/data-access';
import { MatCard, MatCardContent } from '@angular/material/card';
import {
  MatStep,
  MatStepper,
  MatStepperNext,
  MatStepperPrevious,
} from '@angular/material/stepper';
import { KeyValue, KeyValuePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { toSignal } from '@angular/core/rxjs-interop';
import { RegistrationApiService } from '@bierrallye/registration/data-access';

@Component({
  selector: 'bierrallye-registration-feature-register',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    AvailableSpotsComponent,
    MatCard,
    MatCardContent,
    MatStepper,
    MatStep,
    MatStepperNext,
    MatStepperPrevious,
    KeyValuePipe,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private registrationApiService = inject(RegistrationApiService);
  private toastr = inject(ToastrService);
  private dialog = inject(MatDialog);

  private stepper = viewChild(MatStepper);

  participantFormGroup1 = new FormGroup({
    sex: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    fullName: new FormControl('', { validators: [Validators.required] }),
    drink: new FormControl<number | null>(null, {
      validators: [Validators.required],
    }),
  });

  participantFormGroup2 = new FormGroup({
    sex: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    fullName: new FormControl('', { validators: [Validators.required] }),
    drink: new FormControl<number | null>(null, {
      validators: [Validators.required],
    }),
  });

  teamFormGroup = new FormGroup({
    startblock: new FormControl<number | null>(null, {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    dsgvoApproved: new FormControl(false, {
      validators: [Validators.required],
    }),
  });

  drinks = toSignal(this.registrationApiService.drinks(), { initialValue: [] });
  startblocks = toSignal(this.registrationApiService.startblocks());
  sexes = { MALE: 'männlich', FEMALE: 'weiblich' };

  sendRegistration(): void {
    const participant1 =
      this.participantFormGroup1.getRawValue() as CreateParticipant;
    const participant2 =
      this.participantFormGroup2.getRawValue() as CreateParticipant;
    const team = {
      ...(this.teamFormGroup.getRawValue() as RegistrationFormTeamGroup),
    };

    const reg: CreateRegistration = {
      participant1,
      participant2,
      ...team,
    };

    this.registrationApiService.register(reg).subscribe({
      next: () => this.stepper()?.next(),
      error: () => {
        this.toastr.error('Die Anmeldung war nicht erfolgreich', 'Fehler');
      },
    });
  }

  keepOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return 0;
  };

  openDsgvoDialog() {
    if (this.teamFormGroup.controls.dsgvoApproved.value) {
      this.teamFormGroup.controls.dsgvoApproved.patchValue(false);
      const dialogRef = this.dialog.open(DsgvoDialogComponent, {
        minWidth: '325px',
        maxWidth: '33vw',
        maxHeight: '80vh',
      });
      dialogRef.afterClosed().subscribe((result) => {
        this.teamFormGroup.controls.dsgvoApproved.patchValue(result);
      });
    }
  }
}
