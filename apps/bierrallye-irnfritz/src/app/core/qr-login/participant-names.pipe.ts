import { Pipe, PipeTransform } from '@angular/core';
import { IRegistration } from '@bierrallye/shared/data-access';

@Pipe({
  name: 'participantNames',
  standalone: true,
})
export class ParticipantNamesPipe implements PipeTransform {
  transform(value: IRegistration): string {
    return `${value.participant1.fullName} & ${value.participant2.fullName}`;
  }
}
