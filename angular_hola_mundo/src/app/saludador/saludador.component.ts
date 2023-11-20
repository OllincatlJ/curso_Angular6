import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saludador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saludador.component.html',
  styleUrl: './saludador.component.css'
})
export class SaludadorComponent {
  UsserName: string = "Sr. Jimenez";
}
