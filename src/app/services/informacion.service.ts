import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

	info:any = {};
	cargada:boolean = false;
  cargada_firebase:boolean = false;
  equipo:any[] = [];

  constructor( public http:Http) {

    this.carga_info();
    this.carga_sobre_firebase();
  	
  }

  public carga_info(){

    this.http.get("assets/data/info.pagina.json")
          .subscribe( data =>{
            //console.log(data.json());
            this.cargada = true;
            this.info = data.json();
          })

  }

  public carga_sobre_firebase(){

    this.http.get("https://paginaweb-10bdb.firebaseio.com/equipo.json")
          .subscribe( data =>{
            console.log(data.json());
            this.cargada_firebase = true;
            this.equipo = data.json();
          })

  }

}
