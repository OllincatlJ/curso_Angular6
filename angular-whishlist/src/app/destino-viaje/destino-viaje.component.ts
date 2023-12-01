import { Component, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoViaje } from '../models/destino-viaje.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'destino-viaje',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './destino-viaje.component.html',
  styleUrl: './destino-viaje.component.css'
})
export class DestinoViajeComponent {
  @Input() destino: DestinoViaje= new DestinoViaje('','');
  @Input('idx') position: number = -1;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked: EventEmitter<DestinoViaje>

  constructor() {
    this.clicked = new EventEmitter();
  }

  ir() {
    this.clicked.emit(this.destino);
    return false;
  }
}
