import { Registration } from '@bierrallye/shared/data-access';

export interface Team {
  id: number;
  boxId: number;
  startTime?: string;
  endTime?: string;
  registration: Registration;
}
