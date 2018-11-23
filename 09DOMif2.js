/**
 * 사실 앞에서 색깔을 제어하는 것은
 * JS의 역할이 아닌 CSS의 역할이다
 * 우리는 자바스크립트가 스타일이 아닌
 * 로직을 처리하기를 원한다
 * 
 * 우리는 자바스크립트로
 * HTML 태그에 클래스를 추가할 수 있따.
 */
const title = document.querySelector("#title");

const CLICKED_CLASS="clicked";

function handleClick(){
    const currentClass= title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className=CLICKED_CLASS;
    }else{
        title.className="";
    }
}
title.addEventListener("click", handleClick);
/**
 * 위와같이하고
 * clicked라는 클래스의 css특성에 
 * 색을 추가하면
 * 이전에 했던 것과 같은 것을 구현할 수 있다.
* 하지만 이것은 title에 class가 없을때만 가능하다.
좀더 실용적으로 만들어보자
 */
const title = document.querySelector("#title");

const CLICKED_CLASS="clicked";

function handleClick(){
    const hasClass= title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }
}
title.addEventListener("click", handleClick);
/**
 * 하지만 위 우리가 만든 토글 기능은
 * 이미 구현이 돼있다.
 */
const title = document.querySelector("#title");

const CLICKED_CLASS="clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}
title.addEventListener("click", handleClick);
