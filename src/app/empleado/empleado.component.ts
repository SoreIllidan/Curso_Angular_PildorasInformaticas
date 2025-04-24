import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  
})

export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Pérez";
  edad = 16;
  //empresa = "Google";


  constructor() { }

  ngOnInit(): void {
  }

}
