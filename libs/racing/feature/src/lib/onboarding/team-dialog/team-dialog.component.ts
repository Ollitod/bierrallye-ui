import { Component, effect, Inject } from '@angular/core';
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
  OnboardingApiService,
  OnboardingStoreService,
  QrLoginService,
  TeamOnboarding,
  TimeTrackingApiService,
} from '@bierrallye/racing/data-access';
import { ToastrService } from 'ngx-toastr';
import { MatDivider } from '@angular/material/divider';
import { ParticipantFormComponent } from '@bierrallye/shared/ui';
import { participantFormGroup } from '@bierrallye/shared/data-access';

@Component({
  selector: 'bierrallye-racing-feature-team-dialog',
  imports: [
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDivider,
    ParticipantFormComponent,
  ],
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.scss'],
})
export class TeamDialogComponent {
  participantFormGroup1 = participantFormGroup();
  participantFormGroup2 = participantFormGroup();

  teamForm = new FormGroup({
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
    private timeTrackingApiService: TimeTrackingApiService,
    private onboardingApiService: OnboardingApiService,
    private toastr: ToastrService,
    private qrLoginService: QrLoginService,
    private onboardingStoreService: OnboardingStoreService,
    @Inject(MAT_DIALOG_DATA) public teamOnboarding: TeamOnboarding
  ) {
    this.timeTrackingApiService.team(this.teamOnboarding.uuid).subscribe({
      next: (team) => {
        // Team already exists
        this.teamForm.patchValue({
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

    effect(() => this.patchFormValue());
  }

  createTeam() {
    this.onboardingApiService
      .createTeam(this.teamForm.getRawValue() as CreateTeam)
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

  private patchFormValue() {
    const p1 = this.teamOnboarding.participant1;
    const p2 = this.teamOnboarding.participant2;
    this.participantFormGroup1.patchValue({
      ...p1,
      drink: p1.drink.id,
    });
    this.participantFormGroup2.patchValue({
      ...p2,
      drink: p2.drink.id,
    });
  }
}
