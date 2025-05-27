import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[bierrallyeSharedUiCustomColumn]',
  standalone: true,
})
export class CustomColumnDirective {
  @Input('bierrallyeSharedUiCustomColumn') columnName!: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
