import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { HardfactsComponent } from './hardfacts/hardfacts.component';
import { APP_MODE } from '@bierrallye/shared/data-access';
import { PreparationComponent } from './preparation/preparation.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    CommonModule,
    GeneralInfoComponent,
    HardfactsComponent,
    PreparationComponent,
  ],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  protected readonly APP_MODE = APP_MODE;
}
