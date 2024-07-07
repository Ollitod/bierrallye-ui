import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { EventInfoComponent } from '../event-info/event-info.component';
import { FeatureStoreService } from '@bierrallye/shared/data-access';

@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [MatButtonModule, RouterLink, EventInfoComponent],
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
})
export class GeneralInfoComponent {
  featureService = inject(FeatureStoreService);
}
