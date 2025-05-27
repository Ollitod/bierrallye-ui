import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[brExpansionContent]',
  standalone: true,
})
export class ExpansionContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
