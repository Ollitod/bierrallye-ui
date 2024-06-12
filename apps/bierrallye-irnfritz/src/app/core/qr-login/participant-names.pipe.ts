import { Pipe, PipeTransform } from '@angular/core';
import { TeamOnboarding } from '@bierrallye/racing/data-access';

@Pipe({
  name: 'participantNames',
  standalone: true,
})
export class ParticipantNamesPipe implements PipeTransform {
  transform(value: TeamOnboarding): string {
    return `${value.participant1.fullName} & ${value.participant2.fullName}`;
  }
}
