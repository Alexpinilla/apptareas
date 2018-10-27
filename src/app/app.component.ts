import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'listadetareas-app';
  listas = [];
  crearLista(titulo){
    if (titulo!=""){
    var nuevaLista={
      titulo: titulo,
      subLista: []
    }
    this.listas.push(nuevaLista)
  }
  else {
    alert('Introduce un título')
  }
  };
  eliminarLista(tarea){
    console.log(this.listas.indexOf(tarea));
    this.listas.splice(this.listas.indexOf(tarea),1)
  };
}
