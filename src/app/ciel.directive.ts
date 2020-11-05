import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[ciel]'
})
export class CielDirective {
  colors = [
    'blanchedalmond', 'lightslategrey',
    'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue',
    'darksalmon', 'hotpink', 'lightskyblue',
  ];
  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;
  constructor(private el:ElementRef) { 
  }

  @HostListener('keyup') newColor() {
    const randomColor = Math.floor(Math.random() * this.colors.length);
    this.color = this.colors[randomColor];
    this.borderColor = this.colors[randomColor];

  }
}
