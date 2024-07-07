import { Component, computed, inject } from '@angular/core';
import {
  Evaluation,
  EvaluationService,
  StationEvaluation,
} from '@bierrallye/racing/data-access';
import {
  ColumnSpec,
  CustomColumnDirective,
  DynamicTableComponent,
  ExpandableDynamicTableComponent,
  ExpansionContentDirective,
} from '@gepardec/ngx-gepardec-mat';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { Role, UserService } from '@bierrallye/shared/data-access';
import { MatDialog } from '@angular/material/dialog';
import { WinnersDialogComponent } from '@bierrallye/racing/ui';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'bierrallye-racing-feature-evaluation',
  standalone: true,
  imports: [
    ExpandableDynamicTableComponent,
    MatCardModule,
    DynamicTableComponent,
    ExpansionContentDirective,
    MatButton,
    CustomColumnDirective,
  ],
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
})
export class EvaluationComponent {
  private userService = inject(UserService);
  private dialog = inject(MatDialog);

  evaluations: Evaluation[] = [];

  columnsSpecs: ColumnSpec<Evaluation>[] = [
    {
      displayedColumn: 'position',
      header: 'Rang (nach Sortierung)',
    },
    {
      displayedColumn: 'boxId',
      header: 'Box-ID',
    },
    {
      displayedColumn: 'startTime',
      header: 'Startzeit',
    },

    {
      displayedColumn: 'endTime',
      header: 'Zielzeit',
    },
    {
      displayedColumn: 'duration',
      header: 'Zeit',
    },
    {
      displayedColumn: 'penalty',
      header: 'Strafe',
    },
    {
      displayedColumn: 'finalTime',
      header: 'Gesamtzeit',
    },
  ];

  detailColumnSpecs: ColumnSpec<StationEvaluation>[] = [
    {
      displayedColumn: 'station',
      header: 'Station',
    },
    {
      displayedColumn: 'penalty',
      header: 'Strafe',
    },
  ];

  isAdmin = computed(() => this.userService.user()?.role === Role.ADMIN);

  constructor(private evaluationService: EvaluationService) {
    this.evaluationService
      .getEvaluations()
      .subscribe((evaluations) => (this.evaluations = evaluations));
  }

  async openWinnersDialog() {
    const winners = await lastValueFrom(this.evaluationService.getWinners());
    this.dialog.open(WinnersDialogComponent, {
      data: winners,
      minWidth: '400px',
    });
  }
}
