//기준점이 되는 년월일 출력, '일'이 없을시 1일로 자동 출력
//ex) 출력값 "2023-05-01T00:00:00.000Z"
const date = new Date("2023-05");

//기준 날짜가 담긴 date변수에서 '년'만 추출
//ex 출력값 "2023"
const toYear = date.getFullYear();

//기준 날짜가 담긴 date변수에서 '월'만 추출
//주의) getMonth() 매서드는 0월~11월로 출력하기 때문에
//기준점 date변수는 5월이지만, getMonth를 걸치면 '4'로 출력됨
//그래서 getMonth를 이용해 정확한 값을 구하려면 getMonth + 1 을 해줘야함
//ex) 출력값 "4"
const toMonth = date.getMonth();

//기준 '년'과 '월'에서 첫째 날을 출력하는 공식
// new Date(기준년, 기준월, 1) 마지막 1이 중요.
// ex) 출력값 "2023-04-30T15:00:00.000Z"
// ->추가설명: 5월 기준점에서 4월 말이 출력된다.
// 하지만 getDay()통해 요일을 구한다면 5월 1일의 요일을 정확하게 구한다.
const firstDates = new Date(toYear, toMonth, 1);

//위 4월 30일 나온 값을 getDate로 '일'을 출력하면
//출력값: "1"이 나옴
//즉, 위 메서드에서 4/30일이 나와도 getDate로 찍으면 5월 1일이 나온다는 걸 알 수 있음.
const firstDate = new Date(toYear, toMonth, 1).getDate();

//위 firstDate에서 5월의 첫날인 5월 1일의 '1일'값을 firstDate변수에 넣어 주었고,
//이것을 다시 "년", "월", "일"에 넣어서 .getDay();를 통해 요일을 구해주면
//23년 5월 1일의 요일을 알아낼 수 있다.
//아래 출력값 = "1"
//주의) 요일은 "일~토"순으로 나타내며, "0~6"으로 숫자로 표시된다.
//즉 23년 5월 1일이 getDay로 "1"이 나온다면 1 = 월 이다.
const firstDay = new Date(toYear, toMonth, firstDate).getDay();

//기준 '년'과 '월'에서 마지막 날을 출력하는 공식
// new Date(기준년, 기준월 + 1, 0) 마지막 0이 중요.
// month에 + 1을 하는 것은 위에서 말한바 같이 5월은 4로 인식하여
// + 1을 안해주면 4월의 마지막 날인 4월 30일을 출력함
// ex) 출력값 "2023-04-30T15:00:00.000Z"
// 그래서 thMonth + 1을 해줘야 5월 말일을 인식하게 됨
// 아래 출력값: "31"
const lastDate = new Date(toYear, toMonth + 1, 0).getDate();

//위에서 출력한 5월 마지막 일을 대입하고, 그 날의 요일을 구함
//아래 출력값: 3 -> 수요일
const lastDay = new Date(toYear, toMonth, lastDate).getDay();

let month = `${toYear}년 ${toMonth + 1}월`

function onload__calender () {
    let day = "";

    for (let bin = 0; bin < firstDay; bin += 1) {
          day += `<div></div>`
      }

    for (let i = 1; i <= lastDate; i += 1) {
          day += `<div>${i}</div>`
       }

    document.querySelector(".claender__content").innerHTML = day;

    let specialDay = document.querySelector(".claender__content div:nth-child(20)")
    specialDay.classList.add("specialDay")
  }

  //클릭스 이미지 모달
  const imgEl = document.querySelectorAll(".d-block.w-100");

  imgEl.forEach (function(element) {
    element.addEventListener ("click", function() {
      let src = this.getAttribute("src");
      let modalImage = document.querySelector("#modal-image");
       modalImage.setAttribute("src", src);
       let modalShow = document.querySelector(".modal.fade");
       modalShow.classList.add("show");
       modalShow.style.display = "block";
       modalShow.setAttribute("role", "dialog");
    })
  })
   
  

  const closeBtnEl = document.querySelector(".btn-secondary");

  closeBtnEl.addEventListener ("click", function() {
    let modalImage = document.querySelector("#modal-image");
     modalImage.removeAttribute("src");
     let modalShow = document.querySelector(".modal.fade");
     modalShow.classList.remove("show");
     modalShow.style.display = "none";
     modalShow.removeAttribute("role");
  })

  