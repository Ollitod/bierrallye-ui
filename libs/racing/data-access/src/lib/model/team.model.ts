import { IRegistration } from '@bierrallye/shared/data-access';

export interface ITeam {
  id: number;
  boxId: number;
  startTime?: string;
  endTime?: string;
  registration: IRegistration;
}
