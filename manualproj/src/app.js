class Camera {
  constructor(id) {
    this._id = id;
  }
  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  getcompany() {
    console.log("In getcompany");
  }

  fly() {
    console.log("Drone " + this.id + " is Flying");
  }
  // constructor(rno, name){
  //     this.roll = rno;
  //     this.name = name;
  // }
}

// let first = new Camera("A456", "Karan");
let drone = new Camera("A1");

// console.log(`first: ${first['id']} ${first['name']}`)
console.log(`drone: ${drone["id"]}`);

drone.fly();
drone.getcompany();
// first.fly();

let cam = new Camera("123");
cam.id = "147";
console.log("Hello all this is " + cam.id);
