var members = [
    '손흥민', '김영권', '이승우', '기성용', '황희찬', 
    '황희조', '구자철', '이용', '조현우', '김승규',
    '이강인', '박주호', '문선민', '김민재', '황인범', 
    '이정협', '김인성', '구성윤', '장현수', '나상호'];


function NotShowStrings () {
  var String = '';
  for (var i = 0; i < members.length; i++) {
    String += members[i];
    if (i < members.length -1) String += ', ';
  }
  document.querySelector('#not_assigned').innerHTML = String;
}

function assignMemberToTeam (teamNumber) {
  if (members.length === 0) return;
  var member = members[0];
  member = members.splice(0, 1);
  NotShowStrings();

  var liE1 = document.createElement('li');
  liE1.append(member);
  document.querySelector('#team_' + teamNumber).append(liE1);
}