import { Component } from '@angular/core';


@Component({
  selector: 'itens',
  templateUrl: 'itens.html'
})
export class ItensPage {

	
  constructor(){
  		this.conta= {desc:""};
  		this.list=[];	

  } 

  salvar(){	

	this.list.push({descricao:this.conta.desc});

	
  	
  }

}