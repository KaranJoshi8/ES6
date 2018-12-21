import { Bajaj } from "../classes/bajaj.js";
import { Maruti } from "../classes/maruti.js";
import { DataError } from "../Services/data-error.js";

export class FleetDataService {
  constructor() {
    this.bajaj = [];
    this.maruti = [];
    this.errors = [];
  }

  filterCarBymodel(filter) {
    return this.maruti.filter(marutis => marutis.model.indexOf(filter) >= 0);
  }
  getCarByLiscence(liscence) {
    return this.maruti.find(function(maruti) {
      return maruti.liscence === liscence;
    });
  }

  getCarsSortedByLiscence() {
    return this.maruti.sort(function(maruti1, maruti2) {
      if (maruti1.liscence < maruti2.liscence) return -1;
      if (maruti1.liscence > maruti2.liscence) return 1;
      return 0;
    });
  }

  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case "maruti":
          if (this.validateMarutiData(data)) {
            let marutis = this.loadMaruti(data);
            if (marutis) this.maruti.push(marutis);
          } else {
            let e = new DataError("Invalid Maruti Data", data);
            this.errors.push(e);
          }
          break;

        case "bajaj":
          if (this.validateBajajData(data)) {
            let bajajs = this.loadBajaj(data);
            if (bajajs) this.bajaj.push(bajajs);
          } else {
            let e = new DataError("Invalid Bajaj Data", data);
            this.errors.push(e);
          }
          break;

        default:
          let e = new DataError("Invalid Vehicle type", data);
          this.errors.push(e);
          break;
      }
    }
  }

  loadMaruti(maruti) {
    try {
      let m = new Maruti(maruti.liscence, maruti.name, maruti.model);
      m.make = maruti.make;
      return m;
    } catch (e) {
      this.errors.push(new DataError("Error loading maruti", maruti));
    }
    return null;
  }

  loadBajaj(bajaj) {
    try {
      let b = new Bajaj(bajaj.liscence, bajaj.name, bajaj.model);
      b.base = bajaj.base;
      return b;
    } catch (e) {
      this.errors.push();
    }
  }

  validateMarutiData(maruti) {
    let requiredProps = "liscence type name model make".split(" ");
    let hasErrors = false;
    for (let field of requiredProps) {
      if (!maruti[field]) {
        this.errors.push(new DataError(`invalid field ${field}`, maruti));
        hasErrors = true;
      }
    }
    return maruti;
  }

  validateBajajData(bajaj) {
    let requiredProps = "liscence type name model base".split(" ");
    let flag = false;
    for (let field of requiredProps) {
      if (!bajaj[field]) {
        this.errors.push(new DataError(`invalid field ${field}`, bajaj));
        flag = true;
      }
    }
    return bajaj;
  }
}
