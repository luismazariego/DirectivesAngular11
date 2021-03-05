import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMessageDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>
  @Input() color: string = 'red';
  @Input() message: string = '*Required';

  constructor( private el: ElementRef<HTMLElement>) {    
    this.htmlElement = el;
  }
  ngOnInit(): void {
    this.setColor();
    this.setText();
  }

  setColor(): void{
    this.htmlElement.nativeElement.classList.add('form-text');
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.style.fontWeight = '400';
  }

  setText(): void{
    this.htmlElement.nativeElement.innerHTML = this.message;
  }

}
