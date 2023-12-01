import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';
import { DestinoViaje } from '../models/destino-viaje.model';
import { FormDestinoViajeComponent } from '../form-destino-viaje/form-destino-viaje.component';
//import { DestinosApiClient } from '../models/destinos-api-client.model';


@Component({
  selector: 'lista-destinos',
  standalone: true,
  imports: [CommonModule, DestinoViajeComponent , FormDestinoViajeComponent],
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.css'
})

export class ListaDestinosComponent {
  destinos: DestinoViaje[];
  //destinosApiClient: DestinosApiClient;

  @Output() onItemAdded: EventEmitter<DestinoViaje>
  
  //constructor(public destinosApiClient: DestinosApiClient)
  constructor(){
    //this.destinosApiClient =new DestinosApiClient();
    this.destinos = [];
    this.onItemAdded = new EventEmitter();
  }

/*
  guardar(nombre:string, url:string):boolean {
    this.destinos.push(new DestinoViaje(nombre, url));
    //console.log(new DestinoViaje(nombre,url));
    //console.log(this.destinos);
    return false;
  }*/
  agregado(d: DestinoViaje) {
    this.destinos.push(d);
    //this.destinosApiClient.add(d);
    //this.onItemAdded.emit(d);
  }
  
  elegido(d:DestinoViaje){
    this.destinos.forEach(x=>x.setSelected(false));
    
    d.setSelected(true);
    
    }
    
/* 
  elegido(e: DestinoViaje){
    //desmarcar todos los demas en en array de elegidos
    //this.destinos.forEach(function (x) {x.setSelected(false); });
    //se marca el elegido
    //d.setSelected(true);
    this.destinosApiClient.getAll().forEach(x => x.setSelected(false));
    e.setSelected(true);
  }*/
}
