import { Vahan } from './vahan.js'

export class Bajaj extends Vahan {
    constructor(liscence,name,model,latLong){
        super(liscence,name,model,latLong);
        this.base =null;
    }
}