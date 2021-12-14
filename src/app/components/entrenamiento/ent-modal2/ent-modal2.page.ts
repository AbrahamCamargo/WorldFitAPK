import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-ent-modal2',
  templateUrl: './ent-modal2.page.html',
  styleUrls: ['./ent-modal2.page.scss'],
})
export class EntModal2Page implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
