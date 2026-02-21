import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatInput } from '@angular/material/input';
import { Participant, ParticipantForm } from '@bierrallye/shared/data-access';
import { RegistrationApiService } from '@bierrallye/registration/data-access';

export type Sex = { [key: string]: string };

@Component({
  selector: 'bierrallye-shared-ui-participant-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatInput,
    MatLabel,
  ],
  templateUrl: './participant-form.component.html',
  styleUrl: './participant-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantFormComponent {
  private registrationApiService = inject(RegistrationApiService);

  formGroup = input.required<FormGroup<ParticipantForm>>();
  initial = input<Participant>();
  orientation = input<'vertical' | 'horizontal'>('vertical');
  readonly = input(false, { transform: booleanAttribute });

  sexes: Sex = { MALE: 'männlich', FEMALE: 'weiblich' };
  drinks = toSignal(this.registrationApiService.drinks(), { initialValue: [] });

  getDrinkName(id: number | null | undefined) {
    return this.drinks().find((d) => d.id === id)?.name;
  }

  getSex(key: string | null | undefined) {
    if (key) {
      return this.sexes[key];
    }
    return undefined;
  }
}
