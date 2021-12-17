import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appGridItemImage]',   //可在宿主元素中使用  寄宿在宿主身上
})
export class GridItemImageDirective implements OnInit{

  @Input() appGridItemImage = '2rem'
  @Input() fitMode = 'cover' ;

  constructor(private elr: ElementRef, private rd2: Renderer2) {

  }


  ngOnInit(): void {
    this.rd2.setStyle(this.elr.nativeElement,'grid-area', 'image');
    this.rd2.setStyle(this.elr.nativeElement,'width', this.appGridItemImage);
    this.rd2.setStyle(this.elr.nativeElement,'height', this.appGridItemImage);
    this.rd2.setStyle(this.elr.nativeElement,'object-fit', this.fitMode);
  }
  @HostListener('click', ['$event.target'])  // 监听事件 （事件名，事件携带数据）
  handleClick(ev: any) {
    console.log(ev)
  }



}
