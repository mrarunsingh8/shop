import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMegaMenuHeader]'
})
export class MegaMenuHeaderDirective {

  constructor(private elRef: ElementRef) {

  }

  ngAfterViewInit(){

  }

  @HostListener("mouseenter", ['$event'])
  onHover(event){
  	console.log("Mouse Hover Goes Here", event);
  }

}
