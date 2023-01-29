// regi 페이지에만 적용됨

// 콤마붙이는 함수 / function comma(str)
// 콤마를 때는 함수 / function uncomma(str) 
// 숫자만 사용할 수 있는 함수 (+콤마) / function inputNumberFormat(obj)
// 숫자만 사용할 수 있는 함수 (콤마 X) / function inputOnlyNumberFormat(obj)

function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, '');
} 

function inputNumberFormat(obj) {
  obj.value = comma(uncomma(obj.value));
}

function inputOnlyNumberFormat(obj) {
  obj.value = onlynumber(uncomma(obj.value));
}

function onlynumber(str) {
str = String(str);
return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g,'$1');
}