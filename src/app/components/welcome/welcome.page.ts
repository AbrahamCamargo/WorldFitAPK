import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';
import { Router } from  "@angular/router";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private CRUDService:CRUDService,
    private ruteador:Router
  ) { }

  ngOnInit() {
  }

  test(){
   // this.CRUDService.SetData("Abraham", "Camargo");
    //console.log(CRUDService.Nombre);

  };


}
