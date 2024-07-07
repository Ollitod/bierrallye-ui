import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bierrallye-racing-ui-winner-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './winner-entry.component.html',
  styleUrl: './winner-entry.component.scss',
})
export class WinnerEntryComponent {
  label = input.required<string>();
  record = input.required<Record<string, string>>();

  name = computed(() => Object.keys(this.record()));
  totalTime = computed(() => Object.values(this.record()));
}
