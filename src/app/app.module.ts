import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from "@angular/http";

// Rutas
import { app_routing } from './app.routes';

// Servicios
import { InformacionService } from "./services/informacion.service";
import { ProductosService } from "./services/productos.service";


// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortfolioItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    InformacionService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
