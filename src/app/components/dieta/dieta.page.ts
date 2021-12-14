import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.page.html',
  styleUrls: ['./dieta.page.scss'],
})
export class DietaPage implements OnInit {
  formDiet:FormGroup;
  constructor() { }

  ngOnInit() {
  }

  public saveUsername:boolean;

public onSaveUsernameChanged(value:boolean){
    this.saveUsername = value;
}


enviarDatos():any{ 



}

}
