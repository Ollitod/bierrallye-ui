import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ParticipantFormComponent } from '@bierrallye/shared/ui';
import { MatDivider } from '@angular/material/divider';
import {
  CreateParticipant,
  participantFormGroup,
  Registration,
  UpdateRegistration,
} from '@bierrallye/shared/data-access';
import { MatLabel } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { toSignal } from '@angular/core/rxjs-interop';
import { RegistrationApiService } from '@bierrallye/registration/data-access';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bierrallye-racing-feature-edit-registration-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    ParticipantFormComponent,
    MatFormFieldModule,
    MatDivider,
    MatLabel,
    MatSelect,
    MatOption,
  ],
  templateUrl: './edit-registration-dialog.component.html',
  styleUrl: './edit-registration-dialog.component.scss',
})
export class EditRegistrationDialogComponent {
  private registrationApiService = inject(RegistrationApiService);
  private toastService = inject(ToastrService);
  private dialogRef =
    inject<MatDialogRef<Registration, UpdateRegistration | undefined>>(
      MatDialogRef
    );

  readonly registration = inject<Registration>(MAT_DIALOG_DATA);

  readonly formGroup = new FormGroup({
    participant1: participantFormGroup(),
    participant2: participantFormGroup(),
    startblock: new FormControl<number | null>(null, {
      validators: [Validators.required],
    }),
  });

  startblocks = toSignal(this.registrationApiService.startblocks());

  constructor() {
    effect(() => this.patchFormValue());
  }

  onClickSave() {
    const value = this.formGroup.getRawValue();
    this.dialogRef.close({
      ...this.registration,
      ...value,
      participant1: {
        ...(this.formGroup.controls.participant1.getRawValue() as CreateParticipant),
      },
      participant2: {
        ...(this.formGroup.controls.participant2.getRawValue() as CreateParticipant),
      },
    });
  }

  onClickVerify() {
    this.registrationApiService
      .verify(this.registration.uuid)
      .subscribe((message) => this.toastService.success(message));
  }

  private patchFormValue() {
    const p1 = this.registration.participant1;
    const p2 = this.registration.participant2;
    this.formGroup.patchValue({
      ...this.registration,
      participant1: {
        ...p1,
        drink: p1.drink.id,
      },
      participant2: {
        ...p2,
        drink: p2.drink.id,
      },
      startblock: this.registration.startblock.id,
    });
  }
}
