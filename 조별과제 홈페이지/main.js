

// 팝업창 띄우기
window.open("팝업창.html","popup","width=800, height=800, left=0, top=0")



//최상단 상단바 언어 출력


let target = document.querySelector('#dynamic');

function randomString(){
    let stringArr=['Everyday is special with you!','Hellow Dog Shop !','Hellow Dog Love !'];
let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
let selectStringArr = selectString.split("");
return selectStringArr;
}


//타이핑 리셋
function resetTyping(){
    target.textContent ="";
    dynamic(randomString());
}

//한글자씩 텍스트 출력함수
function dynamic(randomArr){
    console.log(randomArr);
 if(randomArr.length > 0){
    target.textContent += randomArr.shift();
    setTimeout(function(){
        dynamic(randomArr);
    },80);
}else{ // 남은 문자열이 없다면
    setTimeout(resetTyping,3000);
}
}
dynamic(randomString());


function blink(){
    target.classList.toggle('active1');
}
setInterval(blink,500);





// 배너 슬라이드 자동 실행

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}    
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}