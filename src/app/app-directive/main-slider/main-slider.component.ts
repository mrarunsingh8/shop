import { Component, OnInit, HostListener, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css'],
})
export class MainSliderComponent implements OnInit {
  @ViewChild("owlWrapper") owlWrapper: ElementRef;

  @Input() imageData: Array<string>;
  
  tempFlag: any = null;
  timeInterval: number = 4000;
  activatedIndex: number = 0;
  imageArr: Array<{image: string, isActive: boolean}> = [];
  constructor() {
  	
  }

  ngOnInit() {  	
  	this.initImageArr();
  	this.autoSlide();
  }

  initImageArr(){
  	 for(let i=0; i<this.imageData.length;i++){
  	 	this.imageArr.push({image: this.imageData[i], isActive: (i===0)});
  	 }
  }

  ngAfterViewInit(){
  	this.resizeSlider();
  }


  @HostListener('window:resize', ['$event'])
  resizeSlider(){
  	this.owlWrapper.nativeElement.style.width = this.owlWrapper.nativeElement.parentNode.style.width;
  }

  autoSlide(){
  	this.tempFlag = setInterval(()=>{
  		this.changeActivate(this.activatedIndex+1);
  	}, this.timeInterval);
  }

  calculateActivate(index){
  	if(index < 0){
  		this.activatedIndex = this.imageArr.length -1;
  	}else if(index > (this.imageArr.length-1)){
  		this.activatedIndex = 0;
  	}else{
  		this.activatedIndex = index;
  	}
  	return this.activatedIndex;
  }

  changeActivate(index: number){
  	this.activatedIndex = this.calculateActivate(index);
  	this.imageArr.map((item, itemIndex)=>{
  		if(itemIndex === this.activatedIndex){
  			return item.isActive = true;
  		}else{
  			return item.isActive = false;
  		}
  	});
  }

  changeSlide(index: number){
  	clearInterval(this.tempFlag);
  	this.changeActivate(index);
  	this.autoSlide();
  }

}
