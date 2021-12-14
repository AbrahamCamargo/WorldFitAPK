import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-ent-modal4',
  templateUrl: './ent-modal4.page.html',
  styleUrls: ['./ent-modal4.page.scss'],
})
export class EntModal4Page implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
