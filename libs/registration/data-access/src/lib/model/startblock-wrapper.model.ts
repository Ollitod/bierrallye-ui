import { Startblock } from '@bierrallye/shared/data-access';

export interface StartblockWrapper {
  startblocks: Startblock[];
  totalSpots: number;
  availableSpots: number;
}
