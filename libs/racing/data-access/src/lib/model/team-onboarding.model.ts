import { Registration } from '@bierrallye/shared/data-access';

export type TeamOnboarding = Omit<Registration, 'startblock'> & {
  startblock: string;
  hasTeam: boolean;
  boxId?: number;
};
