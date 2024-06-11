import { Component, viewChild } from '@angular/core';
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
import {
  DrinkService,
  StartblockService,
} from '@bierrallye/registration/data-access';
import { ToastrService } from 'ngx-toastr';
import { AvailableSpotsComponent } from '@bierrallye/registration/ui';
import {
  IDrink,
  IRegistration,
  IStartblock,
  Participant,
  RegistrationService,
} from '@bierrallye/shared/data-access';
import { MatCard, MatCardContent } from '@angular/material/card';
import {
  MatStep,
  MatStepLabel,
  MatStepper,
  MatStepperIcon,
  MatStepperNext,
  MatStepperPrevious,
} from '@angular/material/stepper';
import { MatIcon } from '@angular/material/icon';
import { KeyValue, KeyValuePipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DsgvoDialogComponent } from '@bierrallye/registration/ui';

@Component({
  selector: 'bierrallye-registration-feature-register',
  standalone: true,
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
    MatStepLabel,
    MatStepperIcon,
    MatIcon,
    MatStepperNext,
    MatStepperPrevious,
    KeyValuePipe,
    MatDivider,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
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

  drinks: IDrink[] = [];
  startblocks: IStartblock[] = [];
  totalSpots = 0;
  availableSpots = 0;
  sexes = { MALE: 'männlich', FEMALE: 'weiblich' };

  constructor(
    private drinksService: DrinkService,
    private startblockService: StartblockService,
    private registrationService: RegistrationService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
    this.drinksService
      .getDrinks()
      .subscribe((drinks) => (this.drinks = drinks));

    this.startblockService.getStartblocks().subscribe((startblocks) => {
      this.startblocks = startblocks.startblocks;
      this.totalSpots = startblocks.totalSpots;
      this.availableSpots = startblocks.availableSpots;
    });
  }

  sendRegistration(): void {
    const participant1 =
      this.participantFormGroup1.getRawValue() as Participant;
    const participant2 =
      this.participantFormGroup2.getRawValue() as Participant;
    const team = {
      ...(this.teamFormGroup.getRawValue() as Pick<
        IRegistration,
        'startblock' | 'email' | 'dsgvoApproved'
      >),
    };

    const reg: IRegistration = {
      participant1,
      participant2,
      ...team,
    };

    this.registrationService.register(reg).subscribe({
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
