import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-propety.component.html',
  styleUrls: ['./input-propety.component.css'],
  inputs: ['nomeCurso:nome']
})
export class InputPropetyComponent {
  // @Input('nome') 
  nomeCurso: string = "";
}
