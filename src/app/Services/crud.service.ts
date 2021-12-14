import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { modelo } from '../components/notas/nota.model';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  API: string='http://localhost/worldfit/';  //API de php CRUD
  API2: string='http://localhost/worldfit/api_apk';
  public static val:any;
  private places: modelo[] = [
    {
      id: '1',
      title: 'Pesos y reps',
      Comment: 'peso de inicio, squads 125kg, peso muerto 150kg...'

    },
    {
      id: '2',
      title: 'Nutrición',
      Comment: 'Consumir de 1.2 a 2 gr de proteina por kg de peso...'
    }
  ]
  constructor(private clienteHttp:HttpClient) {  }
  
  val = "";
  public static ejercicio:any;
  public static ActualEvent:any;
  public static cantNot:any;
  public static Nombre:any;
  public static Apellidos:any;
  public static Id:any;
  public static Correo:any;
  public static Usuario:any;
  public static IdMembresia:any;
  public static Telefono:any;
  public static Genero:any;
  public static FechaMembresia:any;
  public static FechaNacimiento:any;
  public static FechaFinMembresia:any;


  SetData(name:any, lastname:any, email:any, user:any, idUser:any, idmembership:any, phone:any, gender:any, dataMembership:any, birthdate:any, dataEndMembership:any){
    CRUDService.Nombre = name;
    CRUDService.Apellidos = lastname;
    CRUDService.Correo = email;
    CRUDService.Usuario = user;
    CRUDService.Id = idUser;
    CRUDService.IdMembresia = idmembership;
    CRUDService.Telefono = phone;
    CRUDService.Genero = gender;
    CRUDService.FechaMembresia = dataMembership;
    CRUDService.FechaNacimiento = birthdate;
    CRUDService.FechaFinMembresia = dataEndMembership;
  }

  

  getEvent(){
    return this.clienteHttp.get(this.API);
  }
 /*  login(formulario:any){
    return this.clienteHttp.get(this.API);
  } */
  /* login(user:any){
    return this.clienteHttp.get(this.API+"?queryuser="+user);
    } */

  loginuser(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?queryuser="+id);
  }
   
  SaveReservation(archivo: {}){
    return this.clienteHttp.post(this.API+"?SaveReservation", JSON.stringify(archivo));
   }


   SaveFavorite(archivo: {}){
     console.log(archivo);
    return this.clienteHttp.post(this.API+"?SaveFavorite", JSON.stringify(archivo));
   }


   getReservation(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultarReservaciones="+id);
  }

  getFavorite(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultarFavoritos="+id);
  }

  getNotification(){
    return this.clienteHttp.get(this.API+"?notificaciones");
  }
  
  getNotas(){
    return [...this.places]
  }

  getNota (placeId: string){
    this.places.find(place => {
      return place.id ===placeId
    })
  }

  addNota(title: string, Comment: string){
    this.places.push({
      title,
      Comment,
      id: this.places.length + 1 + ""
    });
}


}