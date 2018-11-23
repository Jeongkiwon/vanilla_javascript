/**
 * 자바스크립트는 단지html, css를 수정하는 것
 * 뿐만 아니라
 * 이벤트를 발생 시키고
 * 이벤트를 핸들링하는 기능을 가지고 있다.
 * 
 * 사용자가 하는 모든 행동이 이벤트가 된다.
 */

 function handleResize(){
     console.log("Resize!");
 }

 window.addEventListener("resize", handleResize);
 /**
  * 위와 같이
  * 브라우저 창이 resize 될때마다
  * 함수를 불러오는 Listener를 만들 수있다.
  * 이 Listener는 내가 지정한 이벤트가
  * 발생하기를 기다리고 이벤트가 발생하면
  * 지정한 함수를 실행한다.
  */
 const title = document.querySelector("#title");
 function handleClick(){
    console.log("click!");
}
title.addEventListener("click", handleClick);
/**
 * 위와 같이 DOM에 발생하는
 * 이벤트에 대해서도
 * 함수를 실행할 수 있다.
 */

