import { Injectable } from '@angular/core';
import { DestinoViaje } from './destino-viaje.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinosApiClientService {
  public destinos: DestinoViaje[];
  current: Subject<DestinoViaje> = new BehaviorSubject<DestinoViaje>(new DestinoViaje('', ''));

  constructor() {
    this.destinos = [];
}

add(d:DestinoViaje){
 this.destinos.push(d);
}

getAll():DestinoViaje[]{
 return this.destinos;
 }

getById(id: String): DestinoViaje {
 return this.destinos.filter(function(d){return d.isSelected.toString() === id;})[0];
}

elegir(d: DestinoViaje) {
 this.destinos.forEach(x => x.setSelected(false));
 d.setSelected(true);
 this.current.next(d);
}

subscribeOnChange(fn: any){
 this.current.subscribe(fn);
}
}
