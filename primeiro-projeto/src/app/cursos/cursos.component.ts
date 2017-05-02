import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
	selector: 'app-cursos',
	templateUrl: './cursos.component.html',
	styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
	nomePortal: String;
	cursos: String[];

	constructor(private CursosService: CursosService) {
		this.nomePortal = 'Curso Angular 2';
		this.cursos = this.CursosService.getCursos();
	}

	ngOnInit() {
		
	}
}
