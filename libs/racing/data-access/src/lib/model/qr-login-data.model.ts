import { TeamOnboarding } from './team-onboarding.model';

export interface QrLoginData {
  type: 'notifyReady' | 'payload';
  payload?: {
    encodedUrl: string;
    team: TeamOnboarding;
  };
}
