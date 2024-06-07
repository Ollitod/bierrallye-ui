import { Route } from '@angular/router';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { RaceComponent } from './race/race.component';
import { LiveOverviewComponent } from './live-overview/live-overview.component';

export const racingRoutes: Route[] = [
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'race', component: RaceComponent },
  { path: 'penalty', component: PenaltyComponent },
  { path: 'evaluation', component: EvaluationComponent },
  { path: 'overview', component: LiveOverviewComponent },
];
