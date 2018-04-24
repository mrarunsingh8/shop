import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit {
  

  imageArr: Array<{id: number, name: string, mrp: number, price: number, image: string, imageR: string, isSale: boolean, isNew: boolean, isGift: boolean}> = [
  	{id: 1, name: 'Fur coat with very but very very long name', mrp: 220, price: 143, image: 'assets/img/product1.jpg', imageR: 'assets/img/product1_2.jpg', isSale:false, isGift: false, isNew: false},
  	{id: 2, name: 'White Blouse Armani', mrp: 280, price: 140, image: 'assets/img/product2.jpg', imageR: 'assets/img/product2_2.jpg', isSale:true, isGift: true, isNew: true},
  	{id: 3, name: 'White Blouse Versase', mrp: 340, price: 250, image: 'assets/img/product3.jpg', imageR: 'assets/img/product3_2.jpg', isSale:true, isGift: false, isNew: false},
  	{id: 4, name: 'Fur coat', mrp: 340, price: 243, image: 'assets/img/product1.jpg', imageR: 'assets/img/product1_2.jpg', isSale:false, isGift: true, isNew: false},
  	{id: 5, name: 'Sherwani', mrp: 510, price: 360, image: 'assets/img/product2.jpg', imageR: 'assets/img/product2_2.jpg', isSale:false, isGift: false, isNew: true},
  	{id: 6, name: 'Bridal Lehanga', mrp: 180, price: 123, image: 'assets/img/product3.jpg', imageR: 'assets/img/product3_2.jpg', isSale:false, isGift: false, isNew: false},
  	{id: 7, name: 'Long Sherwani', mrp: 840, price: 675, image: 'assets/img/product1.jpg', imageR: 'assets/img/product1_2.jpg', isSale:false, isGift: false, isNew: false},
  	{id: 8, name: 'Western lehanga', mrp: 160, price: 123, image: 'assets/img/product2.jpg', imageR: 'assets/img/product2_2.jpg', isSale:false, isGift: false, isNew: false},
  	{id: 9, name: 'Eastern Sherwani', mrp: 1200, price: 900, image: 'assets/img/product3.jpg', imageR: 'assets/img/product3_2.jpg', isSale:true, isGift: false, isNew: false},
  	{id: 10, name: 'Bridal Sherwani', mrp: 6800, price: 6200, image: 'assets/img/product1.jpg', imageR: 'assets/img/product1_2.jpg', isSale:false, isGift: false, isNew: false},
  ];
  constructor() {

  }

  ngOnInit() {
  	
  }

}
