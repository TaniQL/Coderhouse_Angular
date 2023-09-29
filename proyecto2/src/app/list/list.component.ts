import { Component } from '@angular/core';
import { Alumno } from '../models/alumno.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  alumnos: Alumno[] =
    [
      {
        "nombre": "Juan",
        "apellido": "Perez",
        "grado": 10,
        "nota": 95
      },
      {
        "nombre": "Maria",
        "apellido": "Lopez",
        "grado": 9,
        "nota": 88
      },
      {
        "nombre": "Pedro",
        "apellido": "Gonzalez",
        "grado": 11,
        "nota": 92
      },
      {
        "nombre": "Ana",
        "apellido": "Martinez",
        "grado": 10,
        "nota": 90
      },
      {
        "nombre": "Luis",
        "apellido": "Rodriguez",
        "grado": 9,
        "nota": 86
      },
      {
        "nombre": "Laura",
        "apellido": "Sanchez",
        "grado": 11,
        "nota": 91
      },
      {
        "nombre": "Carlos",
        "apellido": "Fernandez",
        "grado": 10,
        "nota": 89
      },
      {
        "nombre": "Sofia",
        "apellido": "Gomez",
        "grado": 9,
        "nota": 87
      },
      {
        "nombre": "Diego",
        "apellido": "Ramirez",
        "grado": 11,
        "nota": 94
      },
      {
        "nombre": "Valeria",
        "apellido": "Torres",
        "grado": 10,
        "nota": 93
      }
    ]
}
