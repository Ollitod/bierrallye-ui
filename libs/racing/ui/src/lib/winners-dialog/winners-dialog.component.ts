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
import { Winners } from '@bierrallye/racing/data-access';
import { WinnerEntryComponent } from './winner-entry/winner-entry.component';

@Component({
  selector: 'bierrallye-racing-ui-winners-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    WinnerEntryComponent,
  ],
  templateUrl: './winners-dialog.component.html',
  styleUrl: './winners-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WinnersDialogComponent {
  data: Winners = inject(MAT_DIALOG_DATA);

  getAt(record: Record<string, string>, index: number) {
    const key = Object.keys(record)[index];
    const value = Object.values(record)[index];
    return { [key]: value };
  }
}
