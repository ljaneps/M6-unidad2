import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      nombre: new FormControl ('',Validators.required),
      apellidos: new FormControl('',Validators.required),
      ciudad: new FormControl('',Validators.required),
      edad: new FormControl('', [Validators.required, Validators.min(0), Validators.max(120)]),
      profesion: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });

  }

  enviar() {
    console.log(this.form.value);
  }
}
