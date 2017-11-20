import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DAOContas } from '../../app/dao/dao-contas';

@Component({
  selector: 'contas',
  templateUrl: 'contas.html'
})

export class ContasPage{

	constructor() {
		this.dao= new DAOContas();
		this.listContas= this.dao.getList(); 

	}
}