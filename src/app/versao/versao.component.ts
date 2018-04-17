import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-versao',
  templateUrl: './versao.component.html',
  styleUrls: ['./versao.component.css']
})
export class VersaoComponent implements OnInit {
  @Input()
  versao_maior:number = null;
  @Input()
  versao_funcionalidade:number = null;
  @Input()
  versao_menor:number = null;

  versao_completa = null;

  constructor() { }

  ngOnInit() {
    if(this.versao_maior<1 || this.versao_maior>10){
      if(this.versao_funcionalidade<0 || this.versao_funcionalidade>10){
        if(this.versao_menor<0 || this.versao_menor>100){
          this.versao_completa = "Versão Errada"

        }

      }

    }
    this.versao_completa = this.versao_maior + "." + this.versao_funcionalidade + "." + this.versao_menor;
  }

}
