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

  habilitacionCuadro = false;
  usuRegistrado = false;
  textoDeRegistro="No hay nadie registrado";



  getRegistroUsuario() {

    this.usuRegistrado = false;
  }


  setusuarioRegistrado(event: Event) {
    //alert ("Usuario registrado");
    //this.textoDeRegistro = "Usuario registrado";
    //alert(event.target)

    if(((<HTMLInputElement>event.target)).value=="si" ){
        this.textoDeRegistro="El usuario está registrado";   
    }else
    {
      this.textoDeRegistro="El usuario no está registrado";
    }

  }


  constructor() { }

  ngOnInit(): void {
  }

}
