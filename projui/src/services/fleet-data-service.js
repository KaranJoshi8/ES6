import { Car } from '../classes/car.js';
import { Drone } from '../classes/drone.js';
import { DataError } from './data-error.js';

export class FleetDataService {

    constructor() {
        this.cars = [];
        this.drons = [];
        this.errors = [];
    }


    // load full data from data.ja (fleet) and store them in different arrays like  car, dron, default of constructor **********************
    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {

                case 'car':
                    if (this.validateCarData(data)) {
                        let car = this.loadCar(data);

                        this.cars.push(car);

                    } else {
                        let e = new DataError('invalid data at car case', data);
                        this.errors.push(e);
                    }
                    break;

                case 'drone':
                    if (this.validateDroneData(data)) {
                        let dron = this.loadDron(data);
                        this.drons.push(dron);
                    }
                    break;

                default:
                    let e = new DataError('invalid data at default case', data);
                    this.errors.push(e);
                    break;

            }
        }
    }


    // load car only into car class and return object of Car( c ) *******************************************
    loadCar(car) {
        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        } catch (e) {
            this.errors.push(new DataError('car error', car));
        }
        return null;
    }

    loadDron(dron) {
        try {
            let d = new Drone(dron.license, dron.model, dron.latLong);
            d.airTimeHours = dron.airTimeHours;
            d.base = dron.base;
            return d;
        } catch (e) {
            this.errors.push(new DataError('dron error', dron));
        }
        return null;
    }


    // validate the car data from load data and after validate return that data to load data ***********************
    validateCarData(car) {
        let requiredetail = 'license model latLong miles make'.split(' ');

        for (let field of requiredetail) {
            if (!car[field]) {
                this.errors.push(new DataError(`invalid field in validatin ${field}`, car));
            }
        }
        return car;
    }

    validateDroneData(dron) {
        let requiredetail = 'license model latLong airTimeHours base'.split(' ');

        for (let field of requiredetail) {
            if (!dron[field]) {
                this.errors.push(new DataError(`invalid field ${field}`, dron));
            }
        }
        return dron;
    }


    // find license in cars ( consructor ) and when get return that row of array *******************************************
    getCarByLicence(license) {
        return this.cars.find(function (car) {
            return car.license === license;
        });
    }

    getDronByLicence(license) {
        return this.drons.find(function (dron) {
            return dron.license === license;
        });
    }


    // sort cars ( consructor ) by license and return position of that data ***************************************************
    getCarSortByLicense() {
        return this.cars.sort(function (car1, car2) {
            if (car1.license < car2.license)
                return -1;
            if (car1.license > car2.license)
                return 1;
            return 0;
        });
    }

    getDronSortByLicense() {
        return this.drons.sort(function (dron1, dron2) {
            if (dron1.license < dron2.license)
                return -1;
            if (dron1.license > dron2.license)
                return 1;
            return 0;
        });
    }


    // take string and filter make of cars *************************************************************************************
    filterCarsByMake(filter) {
        return this.cars.filter(car => car.make.indexOf(filter) >= 0);
    }

    filterDronsByMake(filter) {
        return this.drons.filter(dron => dron.make.indexOf(filter) >= 0);
    }


}