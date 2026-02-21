import { Drink } from './drink.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Participant {
  sex: string;
  fullName: string;
  drink: Drink;
}

export interface CreateParticipant {
  sex: string;
  fullName: string;
  drink: number;
}

export interface ParticipantForm {
  sex: FormControl<string | null>;
  fullName: FormControl<string | null>;
  drink: FormControl<number | null>;
}

export const participantFormGroup = (): FormGroup<ParticipantForm> => {
  return new FormGroup({
    sex: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    fullName: new FormControl('', { validators: [Validators.required] }),
    drink: new FormControl<number | null>(null, {
      validators: [Validators.required],
    }),
  });
};
