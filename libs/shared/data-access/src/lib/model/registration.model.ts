import { Startblock } from './startblock.model';
import { CreateParticipant, Participant } from './participant.model';

export interface Registration {
  id: number;
  participant1: Participant;
  participant2: Participant;
  startblock: Startblock;
  email: string;
  uuid: string;
  dsgvoApproved: boolean;
  active: boolean;
  registeredAt: Date;
}

export interface CreateRegistration {
  participant1: CreateParticipant;
  participant2: CreateParticipant;
  startblock: number;
  email: string;
  dsgvoApproved: boolean;
}

export type RegistrationFormTeamGroup = Pick<
  CreateRegistration,
  'startblock' | 'email' | 'dsgvoApproved'
>;
