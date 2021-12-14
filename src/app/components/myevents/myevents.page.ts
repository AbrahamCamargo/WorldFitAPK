import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.page.html',
  styleUrls: ['./myevents.page.scss'],
})
export class MyeventsPage implements OnInit {
  Reservaciones:any;
  constructor( private CRUDService:CRUDService) { }

  ngOnInit() {

    this.CRUDService.getReservation(CRUDService.Id).subscribe(respuesta=>{
      //console.log(respuesta);
      this.Reservaciones=respuesta;
    });

  }

}
