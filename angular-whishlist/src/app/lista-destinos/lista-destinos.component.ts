import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'lista-destinos',
  standalone: true,
  imports: [CommonModule, DestinoViajeComponent],
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.css'
})

export class ListaDestinosComponent {
  destinos: DestinoViaje[];
  constructor(){
    this.destinos = [];
  }

  guardar(nombre: string, url: string): boolean {
    this.destinos.push(new DestinoViaje(nombre,url));
    return false;
  }
}
