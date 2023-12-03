import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';
import { DestinoViaje } from '../models/destino-viaje.model';
import { FormDestinoViajeComponent } from '../form-destino-viaje/form-destino-viaje.component';
//import { DestinosApiClient } from '../models/destinos-api-client.model';
import { DestinosApiClientService } from '../models/destinos-api-client.service';


@Component({
  selector: 'lista-destinos',
  standalone: true,
  imports: [CommonModule, DestinoViajeComponent , FormDestinoViajeComponent],
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.css'
})

export class ListaDestinosComponent {
  //destinos: DestinoViaje[];
  @Output() onItemAdded: EventEmitter<DestinoViaje>
  updates: String[];
  
/*  constructor(){
    //Constructor utilizado antes del apiClient
    this.destinos = [];
    this.onItemAdded = new EventEmitter();
  }

  agregado(d: DestinoViaje) {
    //se utiliza para antes del ApiClient
    this.destinos.push(d);
  }
  
  elegido(d:DestinoViaje){
    //Se utiliza para antes del ApiClient
    this.destinos.forEach(x=>x.setSelected(false));
    
    d.setSelected(true);
    
    }
   */ 

    constructor(public destinosApiClient: DestinosApiClientService){
      this.onItemAdded = new EventEmitter
      this.updates = [];
      this.destinosApiClient.subscribeOnChange((d: DestinoViaje) =>{
        //la version nueva no acepta null como valor predeterminado asi que 
        // la setencia if (d != null) no se puede utilizar
        if (d.nombre.valueOf() != ''){
          this.updates.push('Se ha elegido a ' + d.nombre)
        }
      });
    }

    agregado(d: DestinoViaje){
      this.destinosApiClient.add(d);
      this.onItemAdded.emit(d);
    }

    elegido(e: DestinoViaje){
      this.destinosApiClient.elegir(e);
    }



    /*
  guardar(nombre:string, url:string):boolean {
    this.destinos.push(new DestinoViaje(nombre, url));
    //console.log(new DestinoViaje(nombre,url));
    //console.log(this.destinos);
    return false;
  }*/

}
