import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCheckElement]'
})
export class CheckElementDirective {

  @HostBinding('class.bg-success') isChecked = false;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  @HostListener('click') onMouseClick() {
    console.log(this.isChecked);
    if (this.isChecked === true) {
      this.isChecked = false;
    }
    this.isChecked = true;

  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
