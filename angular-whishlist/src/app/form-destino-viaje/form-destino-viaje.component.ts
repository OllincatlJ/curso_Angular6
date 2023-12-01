import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'form-destino-viaje',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-destino-viaje.component.html',
  styleUrl: './form-destino-viaje.component.css'
})
export class FormDestinoViajeComponent {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg: FormGroup;
  minLongitud = 3;

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: ['', Validators.compose([Validators.required, 
                                      this.nombreValidator,
                                      this.nombreValidatorParametrizable(this.minLongitud)
                                    ])],
      url: ['', Validators.required]
    });
  }

  guardar(nombre: string, url: string): boolean {
    const d = new DestinoViaje(nombre,url);
    this.onItemAdded.emit(d);
    return false;
  }

  nombreValidator(control: FormControl):{ [s: string]: boolean} | null{
    let l = control.value.toString().trim().length;
    if(l>0 && l<5){
      return {invalidNombre: true};
    }
    return null;
  }

  /*

  esta opcion necesita revision para funcionar
   nombreValidator(control: FormControl): ValidatorFn {
    let l = control.value.toString().trim().length;
    let val: boolean = false;
    if(l>0 && l<5){
      val = true;
    }
    return (control: AbstractControl): ValidationErrors | null => {
      return val ? { invalidNombre: {value: control.value}} : null;
    }
  }
  */
 nombreValidatorParametrizable(minLong: number): ValidatorFn{
  return (control: AbstractControl): {[s:string]:boolean} | null => {
    const l = control.value.toString().trim().length;
    if( l > 0 && l < minLong){
      return {minLongNombre: true};
    }
    return null;
  }
 }
}
