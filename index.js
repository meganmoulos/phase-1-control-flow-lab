function scuberGreetingForFeet(distanceFeet){
  // Write your code here!
  if (distanceFeet < 400) {
    return 'This one is on me!';
  }
  else if (distanceFeet >= 400 && distanceFeet < 2000) {
    return 'That will be twenty bucks.';
  }
  else if (distanceFeet >= 2000 && distanceFeet < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (distanceFeet > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!
  return (cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  switch (tipAmount) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    case 'thanks for everything':
      return 'Bye.';
  }
}