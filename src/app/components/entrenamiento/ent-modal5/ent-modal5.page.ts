import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-ent-modal5',
  templateUrl: './ent-modal5.page.html',
  styleUrls: ['./ent-modal5.page.scss'],
})
export class EntModal5Page implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
