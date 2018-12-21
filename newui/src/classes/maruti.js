import { Vahan } from './vahan.js'

export class Maruti extends Vahan {
    
        constructor(liscence,name,model,latLong){
            super(liscence,name,model,latLong);
            this.make =null;
        }
    
}