import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appTag]'
})
export class TagDirective {

  // @ts-ignore
  @Input() @HostBinding('style.background-color') tagBgColor = '#faefe3'
  @Input() @HostBinding('style.color') tagColor = '#ca516a'
  @Input() @HostBinding('style.font-size') tagSize = '0.8rem'
  @Input() @HostBinding('style.padding') tagpadding = '3px'


  constructor() { }

}
