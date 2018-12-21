import { Page } from "../../framework/page.js";
import { DataTable } from './data-table.js';
import { application } from '../app.js';

export class DronePage extends Page {
    constructor() {
        super('drons');
    }

    createElement() {
        super.createElement();

        let headers = 'License base Model'.split(' ');
        let t = new DataTable(headers, application.dataService.drons);
        t.appendToElement(this.element);

    }

    getElementString() {
        return '<div style="margin: 20px;"><h3>Drones</h3></div>';
    }

}