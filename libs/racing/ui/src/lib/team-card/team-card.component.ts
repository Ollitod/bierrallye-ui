import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
} from '@angular/material/card';
import { TeamMinimal } from '@bierrallye/racing/data-access';

@Component({
  selector: 'bierrallye-racing-ui-team-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
  ],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss',
  host: { style: 'display: block' },
})
export class TeamCardComponent {
  team = input.required<TeamMinimal>();
}
