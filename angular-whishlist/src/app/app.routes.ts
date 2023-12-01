import { Routes } from '@angular/router';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';

export const routes: Routes = [
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path: 'Destino', component: DestinoDetalleComponent},
    {path: 'Home', component: ListaDestinosComponent}
];
