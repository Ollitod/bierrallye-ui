import {
  Component,
  computed,
  inject,
  input,
  numberAttribute,
  OnInit,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import {
  MatActionList,
  MatListItem,
  MatListItemLine,
  MatListItemMeta,
  MatListItemTitle,
} from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import {
  CreatePenalty,
  PenaltyStoreService,
} from '@bierrallye/racing/data-access';
import { Router } from '@angular/router';

@Component({
  selector: 'bierrallye-racing-feature-create-penalty',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    MatActionList,
    MatIcon,
    MatIconButton,
    MatListItem,
    MatListItemLine,
    MatListItemMeta,
    MatListItemTitle,
    MatDivider,
  ],
  templateUrl: './create-penalty.component.html',
  styleUrl: './create-penalty.component.scss',
})
export class CreatePenaltyComponent implements OnInit {
  private penaltyStoreService = inject(PenaltyStoreService);
  private router = inject(Router);

  stationId = input.required({ transform: numberAttribute });
  formDirective = viewChild<FormGroupDirective>('formDirective');

  stations = this.penaltyStoreService.stations;
  teams = this.penaltyStoreService.filteredTeams;
  boxIds = this.penaltyStoreService.boxIds;
  penalties = this.penaltyStoreService.recordedPenalties;
  selectedStation = computed(() =>
    this.stations().find((station) => station.id === this.stationId())
  );

  // FIXME: Found out why this is a huge problem.
  //  Even though the stationId was defined as input.signal of type number, the actual type of the id is string, because of the router.
  //  This is why the === operator did not work and the form was also not updated because of this type mismatch.
  //  This is a huge problem and is fixed by defining a transformer, namely the numberAttribute.

  penaltyForm = new FormGroup({
    stationId: new FormControl<number | null>(
      { value: null, disabled: true },
      { nonNullable: false }
    ),
    teamId: new FormControl<number | null>(null, {
      validators: [Validators.required],
      nonNullable: false,
    }),
    boxId: new FormControl<number | null>(null, { nonNullable: false }),
    minutes: new FormControl<number | null>(null, {
      validators: [Validators.required],
      nonNullable: false,
    }),
    comment: new FormControl(''),
  });

  ngOnInit() {
    this.penaltyStoreService.showCreatePenalty.set(true);
    this.penaltyStoreService.loadTeams(this.stationId());
    this.penaltyStoreService.loadPenalties(this.stationId());

    this.penaltyForm.controls.stationId.patchValue(this.stationId());
    // validation is not performed on disabled controls, so required validator has to be set explicitly on the form itself
    this.penaltyForm.setValidators(() =>
      Validators.required(this.penaltyForm.controls.stationId)
    );
  }

  teamSelectionChange(teamId: number) {
    this.penaltyForm.controls.boxId.patchValue(
      this.getBoxIdByTeamId(teamId) || null
    );
  }

  boxIdSelectionChange(boxId: number) {
    this.penaltyForm.controls.teamId.patchValue(
      this.getTeamIdByBoxId(boxId) || null
    );
  }

  back(): void {
    this.penaltyStoreService.showCreatePenalty.set(false);
    this.router.navigate(['racing/penalty']);
  }

  createPenalty() {
    this.penaltyStoreService.createPenalty(
      this.penaltyForm.getRawValue() as CreatePenalty
    );
    this.formDirective()?.resetForm();
    this.penaltyForm.controls.stationId.patchValue(this.stationId());
  }

  deletePenalty(id: number) {
    this.penaltyStoreService.deletePenalty(this.stationId(), id);
  }

  private getBoxIdByTeamId(teamId: number): number | undefined {
    return this.teams().find((team) => team.id === teamId)?.boxId;
  }

  private getTeamIdByBoxId(boxId: number): number | undefined {
    return this.teams().find((team) => team.boxId === boxId)?.id;
  }
}
