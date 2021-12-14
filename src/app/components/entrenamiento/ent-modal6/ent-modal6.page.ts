import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-ent-modal6',
  templateUrl: './ent-modal6.page.html',
  styleUrls: ['./ent-modal6.page.scss'],
})
export class EntModal6Page implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
