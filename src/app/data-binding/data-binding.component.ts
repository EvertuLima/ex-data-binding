import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string = 'https://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  valorAtual: string = '';
  valorSalvo: string = '';

  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    window.alert('Botão clicado');
  }
  onKeyUp(evento: KeyboardEvent){
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }
  salvarValor(valor: KeyboardEvent){
    this.valorSalvo = valor;
  }
}
