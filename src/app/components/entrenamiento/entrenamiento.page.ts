import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { EntModalPage } from '../entrenamiento/ent-modal/ent-modal.page';
import { EntModal2Page } from '../entrenamiento/ent-modal2/ent-modal2.page';
import { EntModal3Page } from '../entrenamiento/ent-modal3/ent-modal3.page';
import { EntModal4Page } from '../entrenamiento/ent-modal4/ent-modal4.page';
import { EntModal5Page } from '../entrenamiento/ent-modal5/ent-modal5.page';
import { EntModal6Page } from '../entrenamiento/ent-modal6/ent-modal6.page';
import { EntModal7Page } from '../entrenamiento/ent-modal7/ent-modal7.page';

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.page.html',
  styleUrls: ['./entrenamiento.page.scss'],
})
export class EntrenamientoPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: EntModalPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  async presentModal2() {
    const modal = await this.modalController.create({
      component: EntModal2Page,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }
  async presentModal3() {
    const modal = await this.modalController.create({
      component: EntModal3Page,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }
  async presentModal4() {
    const modal = await this.modalController.create({
      component: EntModal4Page,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }
  async presentModal5() {
    const modal = await this.modalController.create({
      component: EntModal5Page,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }
  async presentModal6() {
    const modal = await this.modalController.create({
      component: EntModal6Page,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }
  async presentModal7() {
    const modal = await this.modalController.create({
      component: EntModal7Page,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }
 

}
