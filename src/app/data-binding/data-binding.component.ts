import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
    `

  ]
})
export class DataBindingComponent {

  url: string = 'https://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nome: any = 'abc';
  nome2 = ""
  email = ""
  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    window.alert('Botão clicado');
  }
  onKeyUp(evento: any){
    console.log();
   // this.valorAtual = (<HTMLInputElement>evento.target).value;
   this.valorAtual = evento
  }
  
  salvarValor(valor: any) {
    console.log();
    this.valorSalvo = (valor.target as HTMLInputElement).value;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  foo(valor:any = {}){
    alert(valor.pNome)
    this.nome2 = valor.pNome
    this.email = valor.userEmail
  }

}
