function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
    return "This one is on me!"
  }
  else if (400 < someValue && someValue <= 2000) {
    return "That will be twenty bucks."
  }
  else if (2000 < someValue && someValue <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  else (2500 < someValue)
    return "No can do."
}

function ternaryCheckCity(cityName){
  return cityName === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tipAmount){
  switch (tipAmount) {
    case "generous" : return "Thank you so much."
    case "not as generous" : return "Thank you."
    default: return "Bye."
  }  // Write your code here!
}