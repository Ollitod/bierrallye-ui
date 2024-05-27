import { IStartblock } from '@bierrallye/shared/data-access';

export interface IStartblockWrapper {
  startblocks: IStartblock[];
  totalSpots: number;
  availableSpots: number;
}
