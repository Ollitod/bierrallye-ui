import { Pipe, PipeTransform } from '@angular/core';
import { ITeam } from '@bierrallye/racing/data-access';

@Pipe({
  name: 'participantNames',
  standalone: true,
})
export class ParticipantNamesPipe implements PipeTransform {
  transform(value: ITeam): string {
    return `${value.teamFirstMember} & ${value.teamSecondMember}`;
  }
}
