import { Page } from "../../framework/page.js";

export class CarPage extends Page {
    constructor() {
        super('Cars');
    }

    createElement() {
        super.createElement();

        let headers = 'License Make Model Miles'.split(' ');
        let t = new DataTable(headers, application.dataService.cars);
        t.appendToElement(this.element);

    }

    getElementString() {
        return '<div style="margin: 20px;"><h3>Cars</h3></div>';
    }

}