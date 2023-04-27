import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
        
    
        @api firstname; 
        @api lastname;
        @api age;
        @api email; 
        @api rating; 
        @api company; 
        @api annualrevenue;
    
   

}
