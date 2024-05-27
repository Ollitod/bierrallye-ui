import { Component } from '@angular/core';
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
  IDrink,
  StartblockService,
} from '@bierrallye/registration/data-access';
import { ToastrService } from 'ngx-toastr';
import { AvailableSpotsComponent } from '@bierrallye/registration/ui';
import {
  IRegistration,
  IStartblock,
  RegistrationService,
} from '@bierrallye/shared/data-access';
import { MatCard, MatCardContent } from '@angular/material/card';

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
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    player1: new FormControl('', { validators: [Validators.required] }),
    player2: new FormControl('', { validators: [Validators.required] }),
    drink1: new FormControl(0, { validators: [Validators.required] }),
    drink2: new FormControl(0, { validators: [Validators.required] }),
    startblock: new FormControl(0, { validators: [Validators.required] }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    dsgvoApproved: new FormControl(false, {
      validators: [Validators.required],
    }),
    // player1: new FormControl('Oliver', {validators: [Validators.required]}),
    // player2: new FormControl('Johannes', {validators: [Validators.required]}),
    // drink1: new FormControl(1, {validators: [Validators.required]}),
    // drink2: new FormControl(2, {validators: [Validators.required]}),
    // startblock: new FormControl(3, {validators: [Validators.required]}),
    // email: new FormControl('olivertod11@yahoo.de', {validators: [Validators.required, Validators.email]}),
    // dsgvoApproved: new FormControl(true, {validators: [Validators.required]})
  });

  drinks: IDrink[] = [];
  startblocks: IStartblock[] = [];
  totalSpots = 0;
  availableSpots = 0;

  constructor(
    private drinksService: DrinkService,
    private startblockService: StartblockService,
    private registrationService: RegistrationService,
    private toastr: ToastrService
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
    this.registrationService
      .register(this.registerForm.getRawValue() as IRegistration)
      .subscribe({
        next: () => {
          this.registerForm.reset({
            player1: '',
            player2: '',
            drink1: 0,
            drink2: 0,
            startblock: 0,
            email: '',
            dsgvoApproved: false,
          });
          this.toastr.success('Die Anmeldung war erfolgreich', 'Prost!');
        },
        error: () => {
          this.toastr.error('Die Anmeldung war nicht erfolgreich', 'Fehler');
        },
      });
  }
}
