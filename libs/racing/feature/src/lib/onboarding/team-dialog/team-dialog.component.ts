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
  ITeam,
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
    teamFirstMember: new FormControl('', { validators: [Validators.required] }),
    teamSecondMember: new FormControl('', {
      validators: [Validators.required],
    }),
    uuid: new FormControl('', { validators: [Validators.required] }),
    startblock: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.required] }),
    boxId: new FormControl<number | null>(null, {
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
    @Inject(MAT_DIALOG_DATA) public registration: TeamOnboarding
  ) {
    this.teamService.get(this.registration.uuid).subscribe({
      next: (team) => {
        // since email is not a property of ITeam, it has to be patched with the value from the registration
        this.teamForm.patchValue({
          ...team,
          email: this.registration.email,
        });
        this.disableCreateTeamButton();
      },
      error: () => {
        this.teamForm.patchValue({
          ...this.registration,
          teamFirstMember: this.registration.player1,
          teamSecondMember: this.registration.player2,
          startblock: this.registration.startblock.name,
        });
      },
    });

    qrLoginService.messagesOfType('notifyReady').subscribe(() => {
      this.qrLoginService.publish({
        type: 'payload',
        payload: {
          encodedUrl: this.encodedURL ?? '',
          team: this.teamForm.getRawValue() as ITeam,
        },
      });
    });
  }

  createTeam() {
    this.teamService.create(this.teamForm.getRawValue() as ITeam).subscribe({
      next: () => {
        this.toastr.success('Das Team ist startklar', 'Prost!');
        this.onboardingStoreService.setHasTeam(this.registration.uuid);
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
    const email = this.teamForm.controls.email.value;
    const uuid = this.teamForm.controls.uuid.value;

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
