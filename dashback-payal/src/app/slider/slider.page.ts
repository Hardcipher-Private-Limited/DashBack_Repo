import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular/directives/proxies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage{
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides | undefined;
  // @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides | undefined;
  // @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides | undefined;

  sliderOne: any;
  msg:"Cash back refers to a credit card benefit that refunds the cardholder's account a small percentage of the sum spent on purchases"
  | undefined

  // sliderTwo: any;
  // sliderThree: any;


  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  // slideOptsTwo = {
  //   initialSlide: 1,
  //   slidesPerView: 2,
  //   loop: true,
  //   centeredSlides: true,
  //   spaceBetween: 20
  // };
  // slideOptsThree = {
  //   initialSlide: 0,
  //   slidesPerView: 3
  // };

  constructor(
  ) {
    //Item object for Nature
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      imageUrl:[
       {
        image:"assets/icon/Group 166.png",
        header:"Online Shopping",
        msg:"Vast selection of components, accessories, adapters, media drives & more from top brands. No Cost EMI Available. Top Brands. Huge Selection. Low Prices. Great Offers. Easy & Fast Delivery. Best Deals."
       },
       {
        image:"assets/icon/Group 168.png",
        header:"Bill Payment!",
        msg:"Track Status,Upload Documents and Pay Charges; *Online Payment of Other Charges · *Register / Update Mobile number, Email,Aadhar number, TDS and PAN No."
       },
       {
        image:"assets/icon/Group 169.png",
        header:"Cash Back and Best Offers!",
        msg:"Cash back refers to a credit card benefit that refunds the cardholder's account a small percentage of the sum spent on purchases"
       }
      ]  
   }
  }

  slideNext(object:any, slideView:any) {
    slideView.slideNext(600).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }
  SlideDidChange(object:any, slideView:any) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object:any, slideView:any) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object:any, slideView:any) {
    slideView.isBeginning().then((istrue: any) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object:any, slideView:any) {
    slideView.isEnd().then((istrue:any) => {
      object.isEndSlide = istrue;
    });
  }

}
