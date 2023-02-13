let day = '';

for (let i = 0; i < 32; i += 1){
  let date = new Date(`2023-05-${i}`).getDay();
  if (date === 0) {
    day += "[]";
  } else {
    day += " " + i;
  }

  if (i !== 0 && i % 7 === 0) {
    day += "\n";
  }
  
}

day[0] = " ";
console.log(day);