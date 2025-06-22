import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

interface Usuario {
  nombre: string;
  apellidos: string;
  ciudad: string;
  edad: number;
  profesion: string;
  email: string;
}

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {
  cambiar = false;

  usuarios: Usuario[] = [
    { nombre: 'Ana', apellidos: 'Torres García', ciudad: 'Madrid', edad: 28, profesion: 'Ingeniera', email: 'ana.torres@email.com' },
    { nombre: 'Luis', apellidos: 'Pérez López', ciudad: 'Barcelona', edad: 34, profesion: 'Profesor', email: 'luis.perez@email.com' },
    { nombre: 'María', apellidos: 'López Sánchez', ciudad: 'Valencia', edad: 25, profesion: 'Diseñadora', email: 'maria.lopez@email.com' },
    { nombre: 'Carlos', apellidos: 'Ruiz Fernández', ciudad: 'Sevilla', edad: 41, profesion: 'Médico', email: 'carlos.ruiz@email.com' },
    { nombre: 'Elena', apellidos: 'Gómez Díaz', ciudad: 'Bilbao', edad: 30, profesion: 'Abogada', email: 'elena.gomez@email.com' },
    { nombre: 'Javier', apellidos: 'Díaz Romero', ciudad: 'Zaragoza', edad: 36, profesion: 'Arquitecto', email: 'javier.diaz@email.com' },
    { nombre: 'Lucía', apellidos: 'Sánchez Martín', ciudad: 'Granada', edad: 27, profesion: 'Periodista', email: 'lucia.sanchez@email.com' },
    { nombre: 'Miguel', apellidos: 'Castro León', ciudad: 'Valladolid', edad: 32, profesion: 'Chef', email: 'miguel.castro@email.com' },
    { nombre: 'Paula', apellidos: 'Romero Gil', ciudad: 'Alicante', edad: 29, profesion: 'Psicóloga', email: 'paula.romero@email.com' },
    { nombre: 'Sergio', apellidos: 'Vargas Molina', ciudad: 'Córdoba', edad: 38, profesion: 'Informático', email: 'sergio.vargas@email.com' },
    { nombre: 'Carmen', apellidos: 'Gil Herrera', ciudad: 'Santander', edad: 33, profesion: 'Farmacéutica', email: 'carmen.gil@email.com' },
    { nombre: 'David', apellidos: 'Molina Ramos', ciudad: 'Toledo', edad: 40, profesion: 'Contable', email: 'david.molina@email.com' },
    { nombre: 'Sara', apellidos: 'Herrera León', ciudad: 'Salamanca', edad: 26, profesion: 'Veterinaria', email: 'sara.herrera@email.com' },
    { nombre: 'Alberto', apellidos: 'León Ramos', ciudad: 'Oviedo', edad: 35, profesion: 'Mecánico', email: 'alberto.leon@email.com' },
    { nombre: 'Patricia', apellidos: 'Ramos Ortega', ciudad: 'Logroño', edad: 31, profesion: 'Administrativa', email: 'patricia.ramos@email.com' }
    ];

  toggleVista() {
    this.cambiar = !this.cambiar;
    }
}
