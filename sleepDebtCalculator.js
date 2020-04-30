function getSleepHours(day){
  switch (day){
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 9;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
  }
}

function getActualSleepHours(){
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

function getIdealSleepHours(){
  let idealHours = 8;
  return 8 * 7;
}

function calculateSleepDebt(){
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log('You got perfect amount of sleep');
  }
  else if (actualSleepHours > idealSleepHours){
    console.log('You got more sleep than needed, you slept '+ (actualSleepHours - idealSleepHours) + ' hour more than the ideal sleep');
  }
  else{
    console.log('you should get some rest, you slept ' + (idealSleepHours - actualSleepHours) + ' hour less than the ideal sleep');
  }
}
calculateSleepDebt();
