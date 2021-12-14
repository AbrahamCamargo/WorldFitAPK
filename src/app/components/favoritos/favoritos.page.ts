import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
favoritos:any;
  constructor(private CRUDService:CRUDService) { }

  ngOnInit() {
    console.log(CRUDService.Id);
    this.CRUDService.getFavorite(CRUDService.Id).subscribe(respuesta=>{
      console.log(respuesta);
      this.favoritos=respuesta;

    });
  }

}
