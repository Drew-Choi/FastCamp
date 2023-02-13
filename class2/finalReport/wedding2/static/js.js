let day = '';
let date = new Date("2023-05");
let toYear = date.getFullYear();
let toMonth = date.getMonth();
let firstDay = new Date(toYear, toMonth, 1).getDay();
let lastDate = new Date(toYear, toMonth + 1, 0).getDate();
let lastDay = new Date(toYear, toMonth, lastDate).getDay();
console.log(firstDay);
console.log(lastDay);
console.log(lastDate);

let month = `${toYear}년 ${toMonth + 1}입니다.`
console.log(month);

for (let bin = 0; bin < firstDay; bin += 1) {
  day += "[ ]";
  document.querySelector("#main__calender tr").innerHTML = "<td>${day}</td>";
}

for (let i = 1; i <= lastDate; i += 1) {
  day += " " + i;
  if (i % 7 === 0) {
    day += "\n"; 
  } 
}

console.log(day);