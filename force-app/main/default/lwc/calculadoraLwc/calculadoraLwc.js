import { LightningElement, track } from "lwc";

//Importação
//Track: Olhando se a variavel mudou(bindar)
export default class CalculadoraLwc extends LightningElement {

	mostra=false;
	@track num1;
	@track num2;
	resultado;

	mudouN1(event){
		this.num1 = Number(event.target.value);
	}
	mudouN2(event){
		this.num2 = Number(event.target.value);
	}


	soma(){
		this.resultado = this.num1 + this.num2;
	}

	sub(){
		this.resultado = this.num1 - this.num2;
	}

	div(){
		this.resultado = this.num1 / this.num2;
		if(num2===0){
		alert("Divisão por zero impossivi");
	}
	}

	mult(){
		this.resultado = this.num1 * this.num2;
	}

handleOnClick() {

			this.mostra = !this.mostra;
	}
	handleClickClear() {
			this.resultado = "";
			this.num1 = "";
			this.num2 = "";
	}
}