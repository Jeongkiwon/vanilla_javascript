/*
앞에서 배운 object는 다양한 것이 있다.
patrick도 object여서
patrick.name을 할수 있었듯이

console도 object라서
안에 있는 log라는 key를 사용할 수 있었다.

이런 log 같은 키가
function으로 돼있을 수도 있다.
무언가 기능이 있는 것이지
이 기능을 우리가 원하는 곳에 원하는 만큼 쓸 수 있다.

자바스크립트는 어떻게 함수를 만들 수 있을까
*/
function sayHello(){
 console.log("Hello!");
}
/*
위와 같이 함수라는 것을 인식시키고
함수의 이름을 정해주고
안에는 기능을 넣는다.

함수에는 아규먼트 추가하여 함수 안에서
사용할 수 있다.
 */
function sayHello(name, age){
    console.log("Hello!", name, age);
}
sayHello("mo", 15);
/*
위와 같이 아규먼트를 사용하면
함수를 사용할 때마다 다른 이름을
붙여서 Hello 할수있다.
참고로 Hello와 name뒤에 , 를 빼면 에러가 난다.
 

하지만 저것은 뭔가 섹시하지 않다.
*/
function sayHello(name, age){
    console.log(`Hello! ${name} ${age}`);
}
sayHello("mo", 15);
/*
위와 같이 작성하면 더 섹시한 코드가 된다.
*/

/**
 * Caculator를 만들어보자
 */
const calculator = {
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    }
}
const A= calculator.plus(15,7);
console.log(A);