import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.page.html',
  styleUrls: ['./ejercicios.page.scss'],
})
export class EjerciciosPage implements OnInit {

  constructor(private CRUDService:CRUDService,
    private ruteador:Router) { }

  ngOnInit() {
  }



  saveExercise(name:any){
    console.log(name);
    CRUDService.ejercicio = name;
    this.ruteador.navigateByUrl('/sidenav/nav/ejercicio-ind');
  }
}
