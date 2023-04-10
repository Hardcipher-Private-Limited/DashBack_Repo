import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.page.html',
  styleUrls: ['./utilities.page.scss'],
})
export class UtilitiesPage implements OnInit {
  sliderOne =
    {
      imageUrl:[
       {
        image:"assets/icon/Group 514.png",
        header:"Online Shopping",
        msg:"Vast selection of components, accessories, adapters, media drives & more from top brands. No Cost EMI Available. Top Brands. Huge Selection. Low Prices. Great Offers. Easy & Fast Delivery. Best Deals."
       },
       {
        image:"assets/icon/Rectangle.png",
        header:"Bill Payment!",
        msg:"Track Status,Upload Documents and Pay Charges; *Online Payment of Other Charges · *Register / Update Mobile number, Email,Aadhar number, TDS and PAN No."
       },
       {
        image:"assets/icon/Group 515.png",
        header:"Cash Back and Best Offers!",
        msg:"Cash back refers to a credit card benefit that refunds the cardholder's account a small percentage of the sum spent on purchases"
       },
       {
        image:"assets/icon/Group 519.png",
        header:"Cash Back and Best Offers!",
        msg:"Cash back refers to a credit card benefit that refunds the cardholder's account a small percentage of the sum spent on purchases"
       }
      ]  
   }
  
  constructor() { }

  ngOnInit() {
  }

}
