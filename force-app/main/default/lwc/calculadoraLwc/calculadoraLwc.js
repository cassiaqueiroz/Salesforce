import { LightningElement, track } from "lwc";

//Importação
//Track: Olhando se a variavel mudou(bindar)
export default class calculadoraLwc extends LightningElement {

	esconde=false;
	@track num1;
	@track num2;
	resultado;

	mudouN1(event){
		this.num1 = Number(event.target.value);
	}
	
    mudouN2(event){
		this.num2 = Number(event.target.value);
	}
	
	handleOnClick() {
			this.esconde = !this.esconde;
	
	}

	soma(){
     
            this.resultado = (this.num1 + this.num2);

	
        
	}

	sub(){
       
		this.resultado = (this.num1 - this.num2);


        
	}

	
	mult(){
       
		this.resultado = (this.num1 * this.num2);


       
	}
	div(){
       if (this.num2 === 0){
		    alert("Não é possívi");
	    } else {
            this.resultado = (this.num1 / this.num2).toFixed(2);
				
        }

	}

   
    handleClickClear() {

        const inputFields = this.template.querySelectorAll( 
            'lightning-input'
        );

        inputFields.forEach(field => { 
                field.value = null;
                this.resultado = null;



            });
        }
	}
	
