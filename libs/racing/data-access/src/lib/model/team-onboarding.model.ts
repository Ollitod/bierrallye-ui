import { Registration } from '@bierrallye/shared/data-access';

export type TeamOnboarding = Registration & {
  hasTeam: boolean;
  boxId?: number;
};
