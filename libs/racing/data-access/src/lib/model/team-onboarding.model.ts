import { IStartblock, Participant } from '@bierrallye/shared/data-access';

export interface TeamOnboarding {
  participant1: Participant;
  participant2: Participant;
  startblock: IStartblock;
  email: string;
  uuid: string;
  dsgvoApproved: boolean;
  active: boolean;
  hasTeam: boolean;
  registeredAt: Date;
}
