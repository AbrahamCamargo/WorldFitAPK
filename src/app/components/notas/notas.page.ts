import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  places = []
  constructor( private CRUDService:CRUDService,private router: Router) { }

  ngOnInit() {
    this.places = this.CRUDService.getNotas()
  }

  addNewNota(){
    this.router.navigate(['/notas-add'])
  }

}
