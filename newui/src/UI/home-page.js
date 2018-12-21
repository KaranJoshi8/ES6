// import {BaseElement} from './base-element.js';
// import {Image} from './image.js';
// import {Button} from './button.js';
// import {application} from '../app.js';

// export class HomePage extends BaseElement {
//     constructor(){
//         super();
//     }

//     createElement(){
//         super.createElement();

//         let i = new Image('../images/kj.jpg');
//         i.appendToElement(this.element);

//         let styleString = 'width:300px; height: 80px;';
//         let b = new Button('Self-Driving Cars');
//         b.setStyleString(styleString);
//         b.appendToElement(this.element);
//         //b.element.click(()=> application.activateRoute('Maruti'))

//         let b = new Button('Bajaj');
//         b.setStyleString(styleString);
//         b.appendToElement(this.element);
//         //b.element.click(()=> application.activateRoute('Bajaj'))
//     }

//     getElementString(){
//         return `<div style="text-align: center;"></div>`;
//     }
// }
