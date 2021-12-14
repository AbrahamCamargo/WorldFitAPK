import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ent-modal3',
  templateUrl: './ent-modal3.page.html',
  styleUrls: ['./ent-modal3.page.scss'],
})
export class EntModal3Page implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
