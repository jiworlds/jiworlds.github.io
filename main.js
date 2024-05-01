// 전화번호 입력시 제한 걸기
document.getElementById("phone_num").addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 11);
});

// 알림문에 날짜 뜨게하기
var now = new Date();

var year = now.getFullYear();

var month = now.getMonth() + 1;

var date = now.getDate();

var hour = now.getHours();

var minute = now.getMinutes();

if (month < 10) month = "0" + month;

if (date < 10) date = "0" + date;

if (hour < 10) hour = "0" + hour;

if (minute < 10) minute = "0" + minute;

var time = year + "-" + month + "-" + date + " / " + hour + ":" + minute;

//개인정보 제공 동의 시각을 양식에 맞추어 조립하는 코드.

agree = document.getElementById("agree_button");

agree.addEventListener("click", function () {
  alert(time + " 에 개인정보 제공에 동의하셨습니다.");

  submit = document.getElementById("submit_button");

  submit.removeAttribute("disabled");
});

//submit 버튼의 disabled 속성을 해제하는 코드.
