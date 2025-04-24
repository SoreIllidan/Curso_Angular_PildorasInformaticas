import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  
})

export class EmpleadoComponent implements OnInit {

  nombre: string = "Juan";
  apellido: string = "Pérez";
  edad: number = 30;
  empresa: string = "Google";

  constructor() { }

  ngOnInit(): void {
  }

}
