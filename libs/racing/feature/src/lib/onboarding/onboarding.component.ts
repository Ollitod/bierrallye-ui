import { Component } from '@angular/core';
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
import {
  CheckOutService,
  OnboardingService,
  OnboardingStoreService,
  TeamOnboarding,
} from '@bierrallye/racing/data-access';
import { ToastrService } from 'ngx-toastr';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatTooltip } from '@angular/material/tooltip';

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
    MatSlideToggle,
    MatTooltip,
  ],
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent {
  columnSpecs: ColumnSpec<TeamOnboarding>[] = [
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

  registrations = this.onboardingStoreService.filteredRegistrations;
  filterOnboarded = this.onboardingStoreService.filterOnboarded;

  constructor(
    private onboardingService: OnboardingService,
    private onboardingStoreService: OnboardingStoreService,
    private checkOutService: CheckOutService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.onboardingStoreService.loadRegistrations();
  }

  openTeamDialog(registration: TeamOnboarding): void {
    this.dialog.open(TeamDialogComponent, {
      data: registration,
      minWidth: '50%',
    });
  }

  checkOut(registration: TeamOnboarding) {
    this.checkOutService.checkOut(registration.uuid).subscribe({
      next: () =>
        this.toastr.success('Die Zielzeit wurde gespeichert', 'Ausgecheckt'),
      error: (error) => {
        this.toastr.error(error, 'Fehler');
      },
    });
  }

  toggleFilterOnboarded() {
    this.onboardingStoreService.toggleFilterOnboarded();
  }
}
