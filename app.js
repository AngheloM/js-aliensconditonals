var greenalien = 5500;

var redalien = 3000;

var bluealien = 1500;

function alieninvasion (green,red,blue){
  if ((green + red + blue) < 10000) {
    console.log()
  }

  if (green >= 5000) {
    console.log("MOTHER OF GOD, not the green ones");
  }

  if ((green + red) > 8000 ) {
    console.log("DOOOOOM");
  } 

  if ((red + blue) < 3000) {
    console.log("We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!");
  }
}
  alieninvasion(greenalien,redalien,bluealien)