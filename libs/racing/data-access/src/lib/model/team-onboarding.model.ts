import { IDrink, IStartblock } from '@bierrallye/shared/data-access';

export interface TeamOnboarding {
  player1: string;
  player2: string;
  drink1: IDrink;
  drink2: IDrink;
  startblock: IStartblock;
  email: string;
  uuid: string;
  dsgvoApproved: boolean;
  active: boolean;
  hasTeam: boolean;
  registeredAt: Date;
}
