let delivery = true;
let destination = "ukmerge";
let priceItem = 40;
let costDelivery = 20;
let productArr = [delivery, destination, priceItem, costDelivery];
console.log(productArr);
/*----------------------------*/console.log("---------------------------------");
let rainbow = ["red", "orange", "Blackberry", "blue"];
rainbow.splice(2, 2, "Yellow", "Green", "blue", "Purple")
console.log(rainbow);
/*----------------------------*/console.log("---------------------------------");
let team = ["player1", "player2", "player3", "player4", "player5", "player6", "player7",];
function hasEnoughPlayers(teamArray) {
  // return teamArray.length >= 7 /* shorter way to do the same.*/
    if (teamArray.length >= 7) {
    return true;
  } else {
    return false;
  }
}
console.log(hasEnoughPlayers(team));
/*----------------------------*/console.log("---------------------------------");
let arrCities = ["Vilnius", "Kaunas", "Klaipeda", "Palanga", "Jurbarkas"];
  for (let i = 0; i < arrCities.length; i++) {
    arrCities[i]=arrCities[i].toUpperCase();
  }
  console.log(arrCities);
/*----------------------------*/console.log("---------------------------------");
let arrCities2 = ["Vilnius", "Kaunas", "Klaipeda", "Palanga", "Jurbarkas", "BetKasCiaYra"];
function arrayFunc(arr) {
  let newArray = [];
  arr.forEach(function(element) {
    newArray.push(element.toUpperCase())
})
return newArray
}
console.log(arrayFunc(arrCities2));
console.log(arrCities2);
/*----------------------------*/console.log("---------------------------------");
let numTask = [12, 929, 11, 3, 199, 9, 27, 28];
numTask.forEach(function(element) {
  if (element % 3 === 0) {
  element += 100;
}
  console.log(element);
})
console.log(numTask);
/*----------------------------*/console.log("---------------------------------");
let arrCities3 = ["Vilnius", "Kaunas", "Klaipeda", "Palanga", "Jurbarkas", "BetKasCiaYra"];
// let newArr3 = arrCities3.map((elementX1) => elementX1.toUpperCase()) /* shorter way to do the same.*/
let newArr3 = arrCities3.map(function (elementX1) {
  return elementX1.toUpperCase()
});
console.log(newArr3);
console.log(arrCities3);
/*----------------------------*/console.log("---------------------------------");
let bills = [50.23, 19.12, 34.01, 100.11];
let totalBills = bills.map((elementY) => Number((elementY *= 1.15).toFixed(2)))
console.log(bills);
console.log(totalBills);
/*----------------------------*/console.log("----Numbers in Arrays even/odd-----");
let numbers = [[243, 12, 23, 12], [34, 2, 1, 553], [67, 56, 45, 553],]
  for (let i = 0; i < numbers.length; i++) {
    for (var y = 0; y < numbers[i].length; y++) {
      if (numbers[i][y] % 2 === 0) {
        numbers[i][y] += "- even"
      } else {
        numbers[i][y] = numbers[i][y] +"- odd"
      }
    }
  }
  console.log(numbers);
/*----------------------------*/console.log("----Numbers in Arrays even/odd.map-----");
let numbersMap = [[243, 12, 23, 12], [34, 2, 1, 553], [67, 56, 45, 553],]
let maptest = []
numbersMap.map(function(elX, elY) {
  maptest.push[[]]
  elX.map(function(elX1, elY1) {
    if (elX1 % 2 === 0) {
      maptest[elY][elY1].push("- even")
    } else {
      maptest[elY][elY1].push("- odd")
    }
  })
})
console.log(maptest);
