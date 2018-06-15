import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

	productos:any[] = [];
	cargando:boolean = true;

  constructor( private http:Http ) { 

  	this.cargar_productos();

  }

  public cargar_item( cod:string ){

    return this.http.get(`https://paginaweb-10bdb.firebaseio.com/productos/${ cod }.json`);
  }

  public cargar_productos(){

  	this.cargando = true;

  	//if( this.productos.length === 0 ){

  		this.http.get('https://paginaweb-10bdb.firebaseio.com/productos_idx.json')
  							.subscribe( res => {

  								//console.log( res.json() );

  								//setTimeout(()=>{
										this.productos = res.json();
  									this.cargando = false;
  								//},1500 )
  								

  							});

  	//}
  }
}
