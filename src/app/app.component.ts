import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listadetareas-app';
  listas = [];
  subLista = [];
  crearLista(titulo){
    var nuevaLista={
      titulo: titulo,
      consola: console.log("hola")
    }
    this.listas.push(nuevaLista)
  };

/*  hola() {console.log(document.getElementById((this).attr('id')).parentNode.parentNode.id)}*/
}
