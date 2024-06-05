import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-hardfacts',
  standalone: true,
  imports: [MatCard, MatCardContent],
  templateUrl: './hardfacts.component.html',
  styleUrls: ['./hardfacts.component.scss'],
})
export class HardfactsComponent {}
