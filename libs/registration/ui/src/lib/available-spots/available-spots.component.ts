import { Component, Input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'bierrallye-registration-ui-available-spots',
  standalone: true,
  imports: [MatCard, MatCardContent],
  templateUrl: './available-spots.component.html',
  styleUrls: ['./available-spots.component.scss'],
})
export class AvailableSpotsComponent {
  @Input() totalSpots = 0;
  @Input() availableSpots = 0;
}
