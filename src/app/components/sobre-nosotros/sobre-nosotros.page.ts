import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.page.html',
  styleUrls: ['./sobre-nosotros.page.scss'],
})
export class SobreNosotrosPage implements OnInit {
  img:string;
  constructor() { }

  ngOnInit() {
    this.img = 'https://lh3.googleusercontent.com/_uK6APJ8WeGnUNuqhe8BTufl5oeW8m6PCijqOCJVvQSl_QDL1_V9lpGU-GU_b0ZKj5oP7Q=s120'
 
  }

}
