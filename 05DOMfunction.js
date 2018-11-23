/**
 css에서와 같이 
 js에서도 h1, div 등의 것들을 바꿀 수 있다.

 바로 DOM을 사용해서
 */
document.getElementById("title");
/**
 위와 같이 하면
 id가 title인 요소들을 찾아 줄 것이다.
 사실 id는 하나 뿐이라 요소들이 아니라
 요소 하나를 찾아줄 것이다.
 */

 let title=document.getElementsByClassName("title");
 /**
  위와 같이 하면 class가 title인
  것들을 찾아주고 이 것들은
  .item에 들어간다.

  그래서 제일 처음 찾은 title이라는 클래스를 가진 태그는
  title.item(0); 를 통해 select할 수 있다.
  */

/**
 자바스크립트는 우리의 html을 모두 가져와
 객체로 만든다

 이 객체를 DOM이라고 부른다!

위와 같이 객체가 된 title은
많은 키를 가진다.
 */
title.item(0).innerHTML= "hu";
/**
 위와 같이 innerHTML이라는 키는
 해당 객체의 태그에 안의 무언가로 바꾸는 기능이다.
 */

 /**
  우리는 DOM을 통해서 html을 제어할 수 있게 됐다.

  */
/**
 * 매번 item()을 사용해 첫번째 것을 찾기 귀찮다면
 * 우리는 querySelector를 사용할 수 있다.
 * 이것은 좀 더 편하게 첫 번째 것을 
 * 셀렉트 할수있게 해준다.
 */