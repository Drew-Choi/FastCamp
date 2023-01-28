var person_1 = {
    name: 'Alice',
    age: 24,
    married: false,
    likes: ['reading', 'k-pop', 'cycling'],
    job: {
      company: 'Macrosoft',
      role: 'publisher',
      years: 2
    },
    salutation: function () {
      console.log("안녕하세요, 엘리스에요.");
    }
  }

var person_2 = {};
person_2.name = 'Peter';
person_2.age = 30;
person_2.married = true;
person_2.likes = ['console game', 'pizza', 'climbing', 'movie'];
person_2.job = {
  company: 'Booble',
  role: 'programmer',
  years: 5
}
person_2.salutation = function () {
  console.log("피터라고 합니다. 반갑습니다.");
}

var people = [person_1, person_2];

people.push({
    name: 'Natalie',
    age: 27,
    married: false,
    likes: ['yoga', 'coffee'],
    job: {
      company: 'Pear',
      role: 'designer',
      years: 4
    },
    salutation: function () {
      console.log("디자이너 나탈리에요.");
    }
  })
  

function fillTable () {
    for (var i = 0; i < people.length; i++) {
      var trEl = document.createElement("tr");
  
      var tdEl_1 = document.createElement("td");
      tdEl_1.append(people[i].name);
      trEl.append(tdEl_1);
  
      var tdEl_2 = document.createElement("td");
      tdEl_2.append(people[i].age);
      trEl.append(tdEl_2);
  
      var tdEl_3 = document.createElement("td");
      tdEl_3.append(people[i].job.company);
      trEl.append(tdEl_3);
  
      var tdEl_4 = document.createElement("td");
      tdEl_4.append(people[i].job.role);
      trEl.append(tdEl_4);
  
      var tdEl_5 = document.createElement("td");
      tdEl_5.append(people[i].job.years);
      trEl.append(tdEl_5);
  
      document.querySelector("table").append(trEl);
    }
  }  