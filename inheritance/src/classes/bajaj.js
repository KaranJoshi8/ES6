import { Vahan } from './vahan.js'

export class Bajaj extends Vahan {
    constructor(liscence,name,model){
        super(liscence,name,model);
        this.base =null;
    }

}