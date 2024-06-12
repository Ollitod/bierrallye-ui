import { Drink } from './drink.model';

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
