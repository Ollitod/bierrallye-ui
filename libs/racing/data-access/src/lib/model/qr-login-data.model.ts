import { ITeam } from './team.model';

export interface QrLoginData {
  type: 'notifyReady' | 'payload';
  payload?: {
    encodedUrl: string;
    team: ITeam;
  };
}
