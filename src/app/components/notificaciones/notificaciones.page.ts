import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {
  noti:any;
  constructor(private CRUDService:CRUDService) { }

  ngOnInit() {
    this.CRUDService.getNotification().subscribe(respuesta=>{
      console.log(respuesta);
      this.noti=respuesta;
      CRUDService.cantNot = 1;
    });
    
  }

  

}
