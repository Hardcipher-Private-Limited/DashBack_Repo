import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.page.html',
  styleUrls: ['./paymenthistory.page.scss'],
})
export class PaymenthistoryPage implements OnInit {
  ionicForm!: FormGroup; 

  constructor(public fb: FormBuilder) {}

  ngOnInit() {}
  submitForm(){
    console.log(this.ionicForm.value)
  }
}
