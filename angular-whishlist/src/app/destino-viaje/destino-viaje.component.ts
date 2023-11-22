import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'destino-viaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destino-viaje.component.html',
  styleUrl: './destino-viaje.component.css'
})
export class DestinoViajeComponent {
  @Input() destino: DestinoViaje= new DestinoViaje('','');
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() {
  }
}
