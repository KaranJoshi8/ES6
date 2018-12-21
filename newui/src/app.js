import $ from "jquery";
import { fleet } from "./Services/fleet-data.js";
import { FleetDataService } from "./Services/fleet-data-service.js";
import { ApplicationBase } from "../src/framework/application-base.js";
import { HomePage } from "./UI/home-page.js";
// import { Bajaj } from "./classes/bajaj.js";
// import { Maruti } from "./classes/maruti.js";
// import { Button } from "./UI/button.js";
// import { Image } from "./UI/image.js";
// import { TitleBar } from "./UI/title-bar.js";
// import { DataTable } from "./UI/data-table.js";
// import { GoogleMap } from "./UI/google-map.js";

export class App extends ApplicationBase {
  constructor() {
    super("Fleet Manager");
    this.dataService = new FleetDataService();
    this.dataService.loadData(fleet);
  
     this.addRoute('Home',new HomePage(),true);
     this.addRoute('Maruti',null);
     this.addRoute('Bajaj',null);
     this.addRoute('Map',null);
  }
}
export let application = new App();
application.show($("body"));

// let centerOfMap = { lat: 40.783661, lng: -73.965883 };
// let map = new GoogleMap(centerOfMap, dataservice.maruti);
// map.appendToElement($("body"));

// let headers = "Liscence Name Model Make".split(' ');
// let dt = new DataTable(headers, dataservice.maruti);
// dt.appendToElement($('body'));

// let i = new Image('../images/kj.jpg');
// i.appendToElement($('body'));

// let b = new Button('Click here');
// b.appendToElement($('body'));

// let tb = new TitleBar('My Application');
// tb.addlink('Home','')
// tb.addlink('Maruti','')
// tb.addlink('Bajaj','')
// tb.addlink('Map','')
// tb.appendToElement($('body'));

// let dataservice = new FleetDataService();
// dataservice.loadData(fleet);

// let car = dataservice.getCarByLiscence('111');

// let cars = dataservice.getCarsSortedByLiscence();

// let cars = dataservice.filterCarBymodel('A');

// for (let model of cars) console.log(model.model);

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
