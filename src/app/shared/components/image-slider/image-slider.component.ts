import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';

export interface ImageSlider {
  id: number;
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
// @ts-ignore
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;

  intervalId:any;

  constructor(private rd2: Renderer2) {}


  ngOnInit() {}

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        (this.getIndex(++this.selectedIndex) *
          this.imgSlider.nativeElement.scrollWidth) /
        this.sliders.length
      );
    }, this.intervalBySeconds * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(ev:any) {
    const ratio =
      ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }
}
