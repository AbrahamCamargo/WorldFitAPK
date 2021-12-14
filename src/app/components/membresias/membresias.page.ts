import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';


@Component({
  selector: 'app-membresias',
  templateUrl: './membresias.page.html',
  styleUrls: ['./membresias.page.scss'],
})
export class MembresiasPage implements OnInit {
  id_membresia:any;
  fin_membresia:any;
  constructor(private CRUDService:CRUDService) { }

  ngOnInit() {
    this.id_membresia = CRUDService.IdMembresia;
    if(this.id_membresia == 1){
      this.fin_membresia = this.GetDate(CRUDService.FechaFinMembresia) + " A las "+ this.GetTime(CRUDService.FechaFinMembresia);
    }
    //this.fin_membresia = ;
    
  }


  membership(){
     
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

}
