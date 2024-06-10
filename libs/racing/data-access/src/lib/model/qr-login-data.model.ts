import { IRegistration } from '@bierrallye/shared/data-access';

export interface QrLoginData {
  type: 'notifyReady' | 'payload';
  payload?: {
    encodedUrl: string;
    team: IRegistration;
  };
}
