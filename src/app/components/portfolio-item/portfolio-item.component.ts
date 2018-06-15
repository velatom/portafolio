import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";


@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styles: []
})
export class PortfolioItemComponent  {

	producto:any = undefined;

  constructor( private route:ActivatedRoute, private _ps:ProductosService) {

  	route.params.subscribe( parametros=>{

  		console.log( parametros['id']);

  		_ps.cargar_item(parametros['id'])
  			.subscribe( res =>{

  				this.producto= res.json();

  			});


  	});
  }

 

}
