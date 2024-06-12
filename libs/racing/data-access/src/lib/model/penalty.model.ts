export interface Penalty {
  id: number;
  teamBoxId: number;
  nameParticipant1: string;
  nameParticipant2: string;
  stationId: number;
  minutes: number;
  comment: string;
}

export type CreatePenalty = Omit<
  Penalty,
  'id' | 'teamBoxId' | 'nameParticipant1' | 'nameParticipant2'
>;
