import { Component } from '@angular/core';
import {
  EvaluationService,
  IEvaluation,
  IStationEvaluation,
} from '@bierrallye/racing/data-access';
import {
  ColumnSpec,
  DynamicTableComponent,
  ExpandableDynamicTableComponent,
  ExpansionContentDirective,
} from '@gepardec/ngx-gepardec-mat';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'bierrallye-racing-feature-evaluation',
  standalone: true,
  imports: [
    ExpandableDynamicTableComponent,
    MatCardModule,
    DynamicTableComponent,
    ExpansionContentDirective,
  ],
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
})
export class EvaluationComponent {
  evaluations: IEvaluation[] = [];

  columnsSpecs: ColumnSpec<IEvaluation>[] = [
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

  detailColumnSpecs: ColumnSpec<IStationEvaluation>[] = [
    {
      displayedColumn: 'station',
      header: 'Station',
    },
    {
      displayedColumn: 'penalty',
      header: 'Strafe',
    },
  ];

  constructor(private evaluationService: EvaluationService) {
    this.evaluationService
      .getEvaluations()
      .subscribe((evaluations) => (this.evaluations = evaluations));
  }
}
