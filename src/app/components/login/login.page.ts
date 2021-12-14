import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { CRUDService } from 'src/app/Services/crud.service';
import { AlertController } from '@ionic/angular';
import { SidenavPageModule } from '../sidenav/sidenav.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:any;
  pass:any;
  userinput:any;
  constructor(
    private CRUDService:CRUDService,
    private ruteador:Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }


  login(form){
    this.user = form.value.user;
    this.pass = form.value.password;
    //this.showAlert();
      this.CRUDService.loginuser(this.user).subscribe(respuesta =>{
       // console.log(respuesta);
      if(respuesta[0]['User'] == this.user && respuesta[0]['Password'] == this.pass){
        this.CRUDService.SetData(respuesta[0]['FirstName'],respuesta[0]['LastName'],respuesta[0]['Email'],respuesta[0]['User'],respuesta[0]['id_user'],respuesta[0]['id_Membership'],respuesta[0]['Phone'],respuesta[0]['Gender'],respuesta[0]['Date_Membership'],respuesta[0]['BirthDate'],respuesta[0]['Date_End_Membership']);
        this.ruteador.navigateByUrl('/sidenav/nav/inicio');
        this.logincorrecto(respuesta[0]['LastName'], respuesta[0]['FirstName']);
      }else{
        this.loginincorrecto();
      }

    }); 
        /*
            : "2000-05-25"
            : "2022-01-09 13:01:51"
            : "2021-12-09 13:01:51"
            : "abrahamlopez88887@gmail.com"
           : "Abraham"
            : "M"
            : "Camargo"
            Password: "camargo"
            : "6871172558"
            User: "Hemsworth"
            : "1"
            : "1"
        
        */

   /*  this.CRUDService.login(form.value).subscribe((res)=>{
      console.log(res);
      //this.ruteador.navigateByUrl('home');
    }); */
  }
 
  logincorrecto(lastname:any, name:any) {

    this.alertController.create({
      header: 'Bienvenido '+ name + ' '+ lastname,
      subHeader: 'Logeo exitoso',
      message: 'Gracias por usar nuestra app.',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });
  }
  loginincorrecto() {

    this.alertController.create({
      header: 'Error',
      subHeader: 'Usuario y/o contraseña incorrectos',
      message: 'Por favor verifiquelos e intente de nuevo',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }

  

}