import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-lista',
  templateUrl: './sub-lista.component.html',
  styleUrls: ['./sub-lista.component.css']
})
export class SubListaComponent implements OnInit {

  constructor() { }

  @Input() subLista;
  crearTarea(titulo2) {
    if (titulo2 != '') {
      var tarea = {
        titulo2: titulo2
      }
      this.subLista.push(tarea)
    }
    else {
      alert('Introduce el título de la tarea')
    }
  }
  eliminarTarea(item) {
    console.log(this.subLista.indexOf(item));
    this.subLista.splice(this.subLista.indexOf(item), 1)
  };

  completarTarea(completar) {
    var classList = completar.target.classList;
    var classes = completar.target.className;
    if (classes.includes('noCompletada')) {
      classList.remove('noCompletada');
      classList.add('completada');
    } else {
      classList.remove('completada');
      classList.add('noCompletada');
    }
  }

  editar(item){
    console.log(this.subLista.indexOf(item));
  }
  ngOnInit() {

  };

}
