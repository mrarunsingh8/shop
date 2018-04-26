import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMegaMenuHeader]'
})
export class MegaMenuHeaderDirective {
  constructor() {
  }
  ngAfterViewInit(){
  }

  @HostListener("mouseenter", ['$event'])
  onHover(event){
  	event.target.classList.add("open");
  }

  @HostListener("mouseleave", ["$event"])
  onHoverOut(event){
  	event.target.classList.remove("open");
  }
}
