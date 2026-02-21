import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveOverviewStoreService } from '@bierrallye/racing/data-access';
import { TeamCardComponent } from '@bierrallye/racing/ui';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'bierrallye-racing-feature-live-overview',
  imports: [CommonModule, TeamCardComponent],
  templateUrl: './live-overview.component.html',
  styleUrl: './live-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiveOverviewComponent {
  private liveOverviewStore = inject(LiveOverviewStoreService);

  stats = toSignal(this.liveOverviewStore.refreshingRaceStats$);
}
