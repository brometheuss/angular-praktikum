import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  rows = '10';
  cols = '30';
  metod = 'GET';
  action = 'https://script.google.com/macros/s/AKfycbwca8wFuvhmzafTBgy1q97sN0suKtBWTGbABABC/exec';

  submit(f){
    console.log(f);
  }

  log(x){
    console.log(x);
  }

  ngOnInit() {
  }

}