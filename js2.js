let door = {
  isOpen: false,
  open: function () {
    if (doors.isOpen) {
      console.log("Door are open");
    } else {
      doors.isOpen = true;
      console.log("I just opened the doors");
    }
  },
  close: function() {
    if (doors.isOpen) {
      doors.isOpen = false;
      console.log("I am closing the door");
    } else {
      console.log("the doors are closed");
    }
  }
}
/*--------------------------*/ console.log("---------------------------------");
let lietuva = {
  capital: "Vilnius",
  population: 2800000,
  size: 63000,
  nationalDishes: ["cepelinai", "varshke", "darKasKas", "nuIrDar"],
  getRandomDish: () => {
    let randomNumber = Math.floor(Math.random() * (lietuva.nationalDishes.length));
      console.log(lietuva.nationalDishes[randomNumber])
    }
  }

console.log(lietuva);
  lietuva.getRandomDish()
