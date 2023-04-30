import { LightningElement } from 'lwc';

export default class InputBasic extends LightningElement {

    inputs = {
        firstname: "", 
        lastname: "",
        email: "", 
        website: "", 
        company: "", 
        annualrevenue: "" 
    };
    
    handleInputChange(event) {
        let name = event.target.name;
        let value = event.detail.value;
        this.inputs = { ... this.inputs, [name]: value };
        let objetoMontando = JSON.stringify(this.inputs);
        let objetoJSON = JSON.parse(objetoMontando);
        console.log(objetoJSON);
    }

        
    }
