import {Directive, HostBinding, Input} from "@angular/core";

@Directive({
  selector: '[appGridItemTitle]',   //可在宿主元素中使用  寄宿在宿主身上
})
export class GridItemTitleDirective {
  @HostBinding('style.grid-area') area = 'title';
  @HostBinding('style.font-size') @Input() appGridItemTitle = '1rem' ;

}
