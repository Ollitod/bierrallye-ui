import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bierrallye-registration-ui-available-spots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './available-spots.component.html',
  styleUrls: ['./available-spots.component.scss'],
})
export class AvailableSpotsComponent {
  @Input() totalSpots = 0;
  @Input() availableSpots = 0;
}
