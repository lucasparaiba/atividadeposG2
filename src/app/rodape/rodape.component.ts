import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor() { }
  versao_maior = '1';
  versao_funcionalidade = '2';
  versao_menor= '0';
  ngOnInit() {
  }
 
}
