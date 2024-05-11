import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { APP_MODE } from '@bierrallye/shared/data-access';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-event-info',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatCard, MatCardContent],
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss'],
})
export class EventInfoComponent {
  protected readonly APP_MODE = APP_MODE;
}
