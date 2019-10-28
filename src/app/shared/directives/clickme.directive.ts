import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[clickMe]'
})
export class ClickMeDirective {

  constructor(public ref: ElementRef) { }

  @HostListener('click', ['$event']) onInput($event) 
  {
    this.ref.nativeElement.innerHtml = "I'm clicked";
  }
}