import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  CreateTeam,
  OnboardingStoreService,
  QrLoginService,
  TeamOnboarding,
  TeamService,
} from '@bierrallye/racing/data-access';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bierrallye-racing-feature-team-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.scss'],
})
export class TeamDialogComponent {
  teamForm = new FormGroup({
    // only used to display information
    nameParticipant1: new FormControl('', {
      validators: [Validators.required],
    }),
    // only used to display information
    nameParticipant2: new FormControl('', {
      validators: [Validators.required],
    }),
    // only used to display information
    uuid: new FormControl('', { validators: [Validators.required] }),
    // only used to display information
    startblock: new FormControl('', { validators: [Validators.required] }),
    // only used to display information
    email: new FormControl('', { validators: [Validators.required] }),
    boxId: new FormControl<number | null>(null, {
      validators: [Validators.required],
    }),
    // no corresponding mat-form-field
    registrationId: new FormControl<number | null>(null, {
      validators: [Validators.required],
    }),
  });

  encodedURL?: string;
  createTeamDisabled = false;

  constructor(
    private teamService: TeamService,
    private toastr: ToastrService,
    private qrLoginService: QrLoginService,
    private onboardingStoreService: OnboardingStoreService,
    @Inject(MAT_DIALOG_DATA) public teamOnboarding: TeamOnboarding
  ) {
    this.teamService.get(this.teamOnboarding.uuid).subscribe({
      next: (team) => {
        // Team already exists
        this.teamForm.patchValue({
          nameParticipant1: team.registration.participant1.fullName,
          nameParticipant2: team.registration.participant2.fullName,
          uuid: team.registration.uuid,
          startblock: team.registration.startblock.name,
          email: team.registration.email,
          registrationId: team.registration.id,
          boxId: team.boxId,
        });
        this.disableCreateTeamButton();
      },
      error: () => {
        // Team does not exist
        this.teamForm.patchValue({
          nameParticipant1: this.teamOnboarding.participant1.fullName,
          nameParticipant2: this.teamOnboarding.participant2.fullName,
          uuid: this.teamOnboarding.uuid,
          startblock: this.teamOnboarding.startblock.name,
          email: this.teamOnboarding.email,
          registrationId: this.teamOnboarding.id,
        });
      },
    });

    qrLoginService.messagesOfType('notifyReady').subscribe(() => {
      this.qrLoginService.publish({
        type: 'payload',
        payload: {
          encodedUrl: this.encodedURL ?? '',
          team: this.teamOnboarding,
        },
      });
    });
  }

  createTeam() {
    this.teamService
      .create(this.teamForm.getRawValue() as CreateTeam)
      .subscribe({
        next: () => {
          this.toastr.success('Das Team ist startklar', 'Prost!');
          this.onboardingStoreService.setHasTeam(this.teamOnboarding.uuid);
          this.disableCreateTeamButton();
        },
        error: (error) => {
          if (error.error) {
            this.toastr.error(error.error, 'Fehler');
          } else {
            this.toastr.error(
              'Beim anlegen des Teams ist ein unbekannter Fehler aufgetreten',
              'Fehler'
            );
          }
        },
      });
  }

  openQrLoginInNewTab() {
    const email = this.teamOnboarding.email;
    const uuid = this.teamOnboarding.uuid;

    this.encodedURL =
      window.location.origin + `/login/?username=${email}&uuid=${uuid}`;

    // Open new window
    window.open(
      window.location.origin + '/qr-login',
      '_blank',
      'location=yes,height=570,width=520,scrollbars=yes,status=yes'
    );
  }

  disableCreateTeamButton() {
    this.createTeamDisabled = true;
  }
}
