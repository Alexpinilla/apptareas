import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-lista',
  templateUrl: './sub-lista.component.html',
  styleUrls: ['./sub-lista.component.css']
})
export class SubListaComponent implements OnInit {
  
  constructor() { }

@Input () subLista;
  crearSubLista(titulo2){
    var nuevaSubLista={
    titulo2: titulo2
    }
    this.subLista.push(nuevaSubLista)
  }
  eliminarTarea(item){
    console.log(this.subLista.indexOf(item));
    this.subLista.splice(this.subLista.indexOf(item),1)
  };

completarTarea(completar) {
  var classList = completar.target.classList;
  var classes = completar.target.className;
  if (classes.includes('noCompletada')) {
    classList.remove('noCompletada');
    classList.add('completada');
  } else if(classes.includes('completada')) {
    classList.remove('completada');
    classList.add('noCompletada');
  }
}
  

  ngOnInit() {
    
  };

}
