import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'bierrallye-racing-ui-remove-penalty-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
  ],
  templateUrl: './remove-penalty-dialog.component.html',
  styleUrl: './remove-penalty-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemovePenaltyDialogComponent {
  data: { effectLabel: string } = inject(MAT_DIALOG_DATA);
}
