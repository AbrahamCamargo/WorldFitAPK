import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-ent-modal7',
  templateUrl: './ent-modal7.page.html',
  styleUrls: ['./ent-modal7.page.scss'],
})
export class EntModal7Page implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
