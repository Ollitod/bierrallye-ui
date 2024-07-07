import { Component, inject } from '@angular/core';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { HardfactsComponent } from './hardfacts/hardfacts.component';
import { PreparationComponent } from './preparation/preparation.component';
import { FeatureStoreService } from '@bierrallye/shared/data-access';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [GeneralInfoComponent, HardfactsComponent, PreparationComponent],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  featureService = inject(FeatureStoreService);
}
