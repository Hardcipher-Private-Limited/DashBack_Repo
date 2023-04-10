import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allservice',
  templateUrl: './allservice.page.html',
  styleUrls: ['./allservice.page.scss'],
})
export class AllservicePage implements OnInit {
   recharge:boolean=true;
   utility:boolean=false;
   fashion:boolean=false;
   electronics:boolean=false;
   ecommerce:boolean=false;
   
  public Electronics = [
    { title: 'JBL', url: 'assets/icon/electronics/jbl.png',group:'ele'},
    { title: 'Acer', url: 'assets/icon/electronics/Acer.png',group:'ele'},
    // { title: 'BOAT', url: 'assets/icon/electronics/boat.png',group:'ele'},
    // { title: 'Chroma', url: 'assets/icon/electronics/croma.png',group:'ele'},
    // { title: 'DELL', url: 'assets/icon/electronics/dell.png',group:'ele'},
    // { title: 'Lenova', url: 'assets/icon/electronics/lenovo.png',group:'ele'},
    // { title: 'Noise', url: 'assets/icon/electronics/noise.png',group:'ele'},
    // { title: 'Oneplus', url: 'assets/icon/electronics/oneplus.png',group:'ele'},
    // { title: 'OPPO', url: 'assets/icon/electronics/oppo.png',group:'ele'},
    // { title: 'Philips', url: 'assets/icon/electronics/philips.png',group:'ele'},
    // { title: 'Realme', url: 'assets/icon/electronics/realme.png',group:'ele'},
    // { title: 'Sumsung', url: 'assets/icon/electronics/samsung.png',group:'ele'}
  ];
  public Fashion = [
    { title: "Levi's", url: 'assets/icon/Group 575.png',group:'fashion'},
    { title: "Myntra", url: 'assets/icon/Group 572.png',group:'fashion'},
    // { title: "AJIO", url: 'assets/icon/fashion/Group 576.png',group:'fashion'},
    // { title: "Reebok", url: 'assets/icon/fashion/Group.png',group:'fashion'},
    ]
    public Ecommernce = [
      { title: "Flipkart", url: 'assets/icon/Group 574.png',group:'ecommerce'},
      { title: "Amazon", url: 'assets/icon/Group 573.png',group:'ecommerce'},
    ]
    public Category = [
      { title: "Popular", url: 'assets/icon/category/popular.png',group:'category'},
      { title: "Men", url: 'assets/icon/category/men.png',group:'category'},
      { title: "Women", url: 'assets/icon/category/women.png',group:'category'},
      { title: "Kids", url: 'assets/icon/category/kid.png',group:'category'},
    ]
  constructor() { }

  ngOnInit() {
  }
  rechargeClick(){
    console.log("rechargeClick")
    this.ecommerce=false;
    this.recharge=true;
    this.utility=false;
    this.fashion=false;
    this.electronics=false;
  }
  utilityClick(){
  console.log(" utilityClick")
  this.ecommerce=false;
  this.recharge=false;
  this.utility=true;
  this.fashion=false;
  this.electronics=false;
  }
  fashionClick(){
  console.log("fashionClick(")
  this.ecommerce=false;
  this.recharge=false;
  this.utility=false;
  this.fashion=true;
  this.electronics=false;
  }

  electronicsClick(){
    console.log( "electronicsClick") 
  this.ecommerce=false;
  this.recharge=false;
  this.utility=false;
  this.fashion=false;
  this.electronics=true;
  }

  ecommerceClick(){
    console.log( "ecommerceClick") 
  this.ecommerce=true;
  this.recharge=false;
  this.utility=false;
  this.fashion=false;
  this.electronics=false;
  }
}
