import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';
@Component({
  selector: 'app-ejercicio-ind',
  templateUrl: './ejercicio-ind.page.html',
  styleUrls: ['./ejercicio-ind.page.scss'],
})
export class EjercicioIndPage implements OnInit {
  ejercicio:any;
  constructor(private CRUDService:CRUDService) { }

  ngOnInit() {
      this.ejercicio = CRUDService.ejercicio;
  }

}
