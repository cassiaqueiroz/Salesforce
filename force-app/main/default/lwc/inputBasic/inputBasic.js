import { LightningElement } from 'lwc';

export default class InputBasic extends LightningElement {

    nome;
    peso;
    altura;
    result


handleNome(event) {
        this.nome = event.detail.value;  
       
     
}

  handlePeso(event) {
    this.peso = event.detail.value;  
   
 
}

handleAltura(event) {
    this.altura = event.detail.value;  
   
 
}

calculaImc() {
    const IMC = this.peso / (this.altura * this.altura);
    this.result = IMC.toFixed(2);
}
}
