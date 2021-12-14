import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';
import{ Router, ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  Eventos:any;
  fecha:any;
  archivo = {
    idevento: null as any,
    idusuario: null as any
  }
  constructor(
    private CRUDService:CRUDService,
    private ruteador:Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.CRUDService.getEvent().subscribe(respuesta=>{
       //console.log(respuesta);
       this.Eventos=respuesta;
     });

     //this.CRUDService.run();    
  }

  GetDate(date:any):any{
    let fecha = new Date(date);
    return fecha.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

GetTime(hour:any):any{
  let cad2 = hour.slice(11,16);   //Variable containing the time (15:29:00)
  cad2 = cad2 + ":00";
  //console.log("Primera fase: "+cad2);
  let time_ = cad2.split(':'); // convert to array

  // fetch
  var hours = Number(time_[0]);
  var minutes = Number(time_[1]);
  var seconds = Number(time_[2]);

  // calculate
  var timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue= "" + hours;
  } else if (hours > 12) {
    timeValue= "" + (hours - 12);
  } else if (hours == 0) {
    timeValue= "12";
  }

  timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
  timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
  timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

  return timeValue;
}

SaveAndChange(id_evento:any){
  CRUDService.ActualEvent = "";
  CRUDService.ActualEvent = id_evento;
  //console.log(CRUDService.ActualEvent);
  this.upload();
}

redirect(){
  this.ruteador.navigateByUrl('/sidenav/nav/myevents');
}

upload(){
  this.archivo.idevento = CRUDService.ActualEvent;
  this.archivo.idusuario = CRUDService.Id;
  //console.log(this.archivo);
  this.CRUDService.SaveReservation(this.archivo).subscribe( datos =>{
      //console.log(datos);
      this.smsAgregado();
    }
  );
}


favorite(id_evento:any){
  CRUDService.ActualEvent = "";
  CRUDService.ActualEvent = id_evento;
  this.archivo.idevento = CRUDService.ActualEvent;
  this.archivo.idusuario = CRUDService.Id;
  this.CRUDService.SaveFavorite(this.archivo).subscribe( datos =>{
    console.log(datos);
    this.smsAgregadoaFavoritos();
  }
);
  this.ruteador.navigateByUrl('/sidenav/nav/favoritos');
  
}





smsAgregado() {

  this.alertController.create({
    header: 'El evento se Guardo con exito',
    message: 'Puede encontrarlo en Mis Eventos',
    buttons: ['OK']
  }).then(res => {

    res.present();

  });
}


smsAgregadoaFavoritos() {

  this.alertController.create({
    header: 'El evento agrego a Favoritos',
    message: 'Puede encontrarlo en Mis Eventos',
    buttons: ['OK']
  }).then(res => {

    res.present();

  });
}



}
