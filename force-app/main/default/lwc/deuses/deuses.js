import { LightningElement } from 'lwc';

export default class Deuses extends LightningElement {
    
    deuses = [
        {god:1, nome:"Zeus" , tipo: "Grego", genero:"M", what: "Trovão",  oposto: "Hades", whatOposto: "Mortos" },
        {god:2, nome:"Afrodite" , tipo: "Grego", genero:"F", what: "Amor", oposto: "Ares", whatOposto: "Guerra"  },
        {god:3, nome:"Dionísio" , tipo: "Grego", genero:"M", what: "Vinho", oposto: "Héstia", whatOposto: "Lar"  },
        {god:4, nome:"Baco" , tipo: "Romano", genero:"M", what: "Vinho", oposto: "Ceres", whatOposto: "Fertilidade"  },
        {god:5, nome:"Vênus" , tipo: "Aéreo", genero:"F", what: "Amor", oposto: "Marte", whatOposto: "Guerra" }
        ];
        

}