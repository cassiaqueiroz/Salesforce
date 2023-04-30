import { LightningElement } from "lwc";

//Importação
//Track: Olhando se a variavel mudou(bindar)
export default class CalculadoraLwc extends LightningElement {

	
	num1;
	num2;
	resultado;
	mostra=false;

	mudouN1(event){
		this.num1 = Number(event.target.value);
	}
	mudouN2(event){
		this.num2 = Number(event.target.value);

	}


	soma(){
		this.resultado = this.num1 + this.num2;
		mostra=false;

	}

	sub(){
		this.resultado = this.num1 - this.num2;
		mostra=false;

	}

	div(){
		this.resultado = this.num1 / this.num2;
		if(num2===0){
		alert("Não é possivi");
		}
		mostra=false;
	}


	mult(){
		this.resultado = this.num1 * this.num2;
	}

handleOnClick() {

			this.mostra = !this.mostra;
	}
	handleClickClear() {
		this.num1 = null;
		this.num2 = null;
		this.resultado = null;
		
	}
}