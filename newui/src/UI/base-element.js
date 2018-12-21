import $ from "jquery";

export class BaseElement {
  constructor() {
    this.element = null; //jquery Object
  }

  appendToElement(el) {
    this.createElement();
    el.append(this.element);
    this.enableJS();
  }

  createElement() {
    let s = this.getElementString();
    this.element = $(s);
    console.log("Base element Create Elemnt");
  }
  
  getElementString() {
    throw "please override getElementString() in BaseElements";
    console.log("Base element");
  }

  enableJS(){
      componentHandler.upgradeElement(this.element[0]);
  }
}