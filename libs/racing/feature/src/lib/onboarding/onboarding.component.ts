import { Component } from '@angular/core';
import {
  IRegistration,
  RegistrationService,
} from '@bierrallye/shared/data-access';
import {
  ColumnSpec,
  CustomColumnDirective,
  DynamicTableComponent,
} from '@gepardec/ngx-gepardec-mat';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TeamDialogComponent } from './team-dialog/team-dialog.component';
import { CheckOutService } from '@bierrallye/racing/data-access';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bierrallye-racing-feature-onboarding',
  standalone: true,
  imports: [
    DynamicTableComponent,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    CustomColumnDirective,
  ],
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent {
  columnSpecs: ColumnSpec<IRegistration>[] = [
    {
      displayedColumn: 'hasTeam',
      header: 'Angelegt',
      width: '5%',
    },
    {
      displayedColumn: 'player1',
      header: 'Spieler 1',
    },
    {
      displayedColumn: 'player2',
      header: 'Spieler 2',
    },
    {
      displayedColumn: 'active',
      header: 'Aktiv',
      width: '5%',
    },
    {
      displayedColumn: 'email',
      header: 'Email',
    },
    {
      displayedColumn: 'drink1',
      header: 'Getränk 1',
    },
    {
      displayedColumn: 'drink2',
      header: 'Getränk 2',
    },
    {
      displayedColumn: 'startblock',
      header: 'Startblock',
    },
    {
      displayedColumn: 'apply',
      header: 'Übernehmen',
      width: '10%',
    },
  ];

  registrations: IRegistration[] = [];

  constructor(
    private registrationService: RegistrationService,
    private checkOutService: CheckOutService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.registrationService
      .getRegistrations()
      .subscribe((registrations) => (this.registrations = registrations));
  }

  openTeamDialog(registration: IRegistration): void {
    this.dialog.open(TeamDialogComponent, {
      data: registration,
      minWidth: '50%',
    });
  }

  checkOut(registration: IRegistration) {
    this.checkOutService.checkOut(registration.uuid).subscribe({
      next: () =>
        this.toastr.success('Die Zielzeit wurde gespeichert', 'Ausgecheckt'),
      error: (error) => {
        this.toastr.error(error, 'Fehler');
      },
    });
  }
}
