import { TeamMinimal } from './team-minimal.model';

export interface RaceStats {
  started: TeamMinimal[];
  station1: TeamMinimal[];
  station2: TeamMinimal[];
  station3: TeamMinimal[];
  station4: TeamMinimal[];
  station5: TeamMinimal[];
  station6: TeamMinimal[];
  station7: TeamMinimal[];
  station8: TeamMinimal[];
  finished: TeamMinimal[];
}
