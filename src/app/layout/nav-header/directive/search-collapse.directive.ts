import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSearchCollapse]'
})
export class SearchCollapseDirective {

  constructor(private elRef: ElementRef) { }

  @HostListener("click")
  onClick(){
  	let targetElm = document.querySelector(this.elRef.nativeElement.getAttribute('data-target'));
  	if(targetElm.classList.contains("in")){
  		targetElm.classList.remove("in");
  	}else{
  		targetElm.classList.add("in");
  	}
  }

}
