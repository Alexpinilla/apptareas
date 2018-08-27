import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-lista',
  templateUrl: './sub-lista.component.html',
  styleUrls: ['./sub-lista.component.css']
})
export class SubListaComponent implements OnInit {

  constructor() { }

  subLista=[];
  crearSubLista(titulo2){
    var nuevaSubLista={
    titulo2: titulo2
    }
    this.subLista.push(nuevaSubLista)
  }
  ngOnInit() {
    
  };

}
