import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mainSliderImageimageData: Array<string> = [
  	'assets/img/main-slider1.jpg',
  	'assets/img/main-slider2.jpg',
  	'assets/img/main-slider3.jpg',
  	'assets/img/main-slider4.jpg'
  ];

  getInspiredImageData: Array<string> = [
  	'assets/img/getinspired1.jpg',
  	'assets/img/getinspired2.jpg',
  	'assets/img/getinspired3.jpg',
  ];
  constructor() { }

  ngOnInit() {
  }

}
