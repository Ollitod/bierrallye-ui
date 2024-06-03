import { IStartblock } from './startblock.model';
import { Participant } from './participant.model';

export interface IRegistration {
  participant1: Participant;
  participant2: Participant;
  startblock: number | IStartblock;
  email: string;
  uuid?: string;
  dsgvoApproved: boolean;
  active?: boolean;
  hasTeam?: boolean;
}
