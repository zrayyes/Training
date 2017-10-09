const vacation = {
    destination: "Vienna",
    travelers: 2,
    cost: 4000
};

function vacationCost({destination, cost}){
  return `The trip to ${destination} costs $${cost}.`
}

console.log(vacationCost(vacation));