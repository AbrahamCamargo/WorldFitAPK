import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  name:any;
  lastname:any;
  birthday:any;
  email:any;
  phone:any;
  user_:any;
  gender:any;
  age:any;

  constructor(private CRUDService:CRUDService) { 

    this.user();
  }

  ngOnInit() {

    
  }


  user(){
    this.lastname = CRUDService.Apellidos;
    this.name = CRUDService.Nombre;
    this.email = CRUDService.Correo;
    this.birthday = CRUDService.FechaNacimiento;
    this.phone = CRUDService.Telefono;
    this.user_ = CRUDService.Usuario;
    this.gender = CRUDService.Genero;
    this.age = this.calculateAge(CRUDService.FechaNacimiento);

  }




  calculateAge(birthday:any):any {
    var birthday_arr = birthday.split("-");
    console.log(birthday_arr);
    var birthday_date = new Date(birthday_arr[0], birthday_arr[1] - 1, birthday_arr[2]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
}
