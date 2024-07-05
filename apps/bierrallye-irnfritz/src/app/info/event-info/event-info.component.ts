import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FeatureStoreService } from '@bierrallye/shared/data-access';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-event-info',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatCard, MatCardContent],
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss'],
})
export class EventInfoComponent {
  featureService = inject(FeatureStoreService);
}
