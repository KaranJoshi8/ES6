import { Bajaj } from "./classes/bajaj.js";
import { Maruti } from "./classes/maruti.js";
import { fleet } from "./Services/fleet-data.js";
import { FleetDataService } from "./Services/fleet-data-service.js";

let dataservice = new FleetDataService();
dataservice.loadData(fleet);

// let car = dataservice.getCarByLiscence('111');

// let cars = dataservice.getCarsSortedByLiscence();

let cars = dataservice.filterCarBymodel('A'); 

for (let model of cars) console.log(model.model);

//  for (let maruti of dataservice.maruti) console.log("maruti:- " + maruti.liscence);
//  for (let bajaj of dataservice.bajaj) console.log("Bajaj:- " + bajaj.model);
//  for (let e of dataservice.errors) console.log(e.message);

// class Vahan {
//   constructor(liscence) {
//     this.gpsEnabled = true;
//     this.liscence = liscence;
//   }

//   start(){
// 	  console.log("vahan ni method");
//   }
//   static getcompanyname(){
//     console.log("vahan ni getcompanyname ma")
//   }
// }

// class Maruti extends Vahan {}

// class Bajaj extends Vahan {
//   constructor(liscencenum) {
//     super(liscencenum);
//     this.gpsEnabled = false;
//   }

//   start(){
// 	  console.log("bajaj ni method");
// 	  super.start();

//   }
//   static getcompanyname(){
//     super.getcompanyname();
//     console.log("Bajaj ni getcompanyname ma")
//   }
// }

// let c = new Bajaj("1478523669");
// console.log(c.gpsEnabled);
// console.log(c.liscence);
// c.start();
// Bajaj.getcompanyname();
