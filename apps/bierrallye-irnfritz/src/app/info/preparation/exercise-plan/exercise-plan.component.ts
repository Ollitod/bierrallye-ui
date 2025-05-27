import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-exercise-plan',
  imports: [MatCard, MatCardContent],
  templateUrl: './exercise-plan.component.html',
  styleUrls: ['./exercise-plan.component.scss'],
})
export class ExercisePlanComponent {}
