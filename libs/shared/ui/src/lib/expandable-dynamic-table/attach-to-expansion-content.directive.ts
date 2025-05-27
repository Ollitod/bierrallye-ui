import { Directive, Input, TemplateRef } from '@angular/core';

export type Position = 'before' | 'after';

@Directive({
  selector: '[bierrallyeSharedUiAttachToExpansionContent]',
  standalone: true,
})
export class AttachToExpansionContentDirective {
  @Input('bierrallyeSharedUiAttachToExpansionContent') position?: Position =
    'after';

  constructor(public templateRef: TemplateRef<any>) {}
}
