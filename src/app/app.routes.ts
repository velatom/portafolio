
import { RouterModule, Routes } from '@angular/router';

import {
	AboutComponent,
	PortafolioComponent,
	PortfolioItemComponent,
	SearchComponent
} from "./components/index.paginas";


const app_routes: Routes = [

	{ path: 'home', component: PortafolioComponent }, // Home principal
	{ path: 'about', component: AboutComponent },
	{ path: 'producto/:id', component: PortfolioItemComponent },
	{ path: 'buscar/:termino', component: SearchComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });