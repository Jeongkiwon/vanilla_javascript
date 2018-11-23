/**
 * 오늘은 조건문을 알아보자
 * 조건문의 기본적인 구조는 다 알것이니
 * 자바스크립트(DOM)에서 쓰는 것을 보자
 */
const title = document.querySelector("#title");
function handleClick(){
   title.style.color="blue";
}
title.addEventListener("click", handleClick);
/**
 * 위 코드는 id가 title인 것을 클릭하면
 * 색생을 파랑으로 해준다.
 * 이제 조건에 따라 색을 달리해주는 코드를
 * 만들어보자
 * 토글 같이!
 */
const title = document.querySelector("#title");

const BASE_COLOR="red";
const OTHER_COLOR="blue";

function handleClick(){
    const currentColor=title.style.color;
    if(currentColor===BASE_COLOR){
        currentColor=OTHER_COLOR;
    }else{
        currentColor=BASE_COLOR;
    }
}
title.style.color=BASE_COLOR;
title.addEventListener("click", handleClick);
