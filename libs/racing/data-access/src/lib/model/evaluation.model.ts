import { StationEvaluation } from './station-evaluation.model';

export interface Evaluation {
  boxId: string;
  stationEvaluation: StationEvaluation[];
  startTime: string;
  endTime: string;
  penalty: string;
  duration: string;
  finalTime: string;
}
