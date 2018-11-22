/*우리가 가진 데이터 타입을 정렬하는 방법!
방법은 두가지다
1. array
*/
const daysOfWeek = ["mon","tue","wed","thu","fri","sat","sun"];
console.log(daysOfWeek);

/*
array에는 array라는 규칙이 있다. 첫 번째 index는 0이라는 것이다.
그리고 위 배열의 [7]과 같이 없는 것을 찾으려하면 undefined가 return 된다.
더불어 하나의 배열에 여러종류의 데이터타입을 넣을 수 있다.
*/
/*
2. object
데이터를 특정 형식으로 만들 때 필요한 것이다.
마치 C의 struct와 비슷하다.
*/
const patrick={
    name:"kiwon",
    age:24,
    city:"daegu",
}
console.log(patrick.name);
patrick.name="jane";
console.log(patrick.name);
patrick.gender="male";
console.log(patrick.gender);
/*
위와 같이 만들 수 있다. 속성과 값이 있다.
name은 속성이며 kiwon은 name 속성의 값이다.

위를 보면 name의 값이 바뀌었다.
그리고 gender라는 속성도 추가했다.
const로 선언한 것은 바꿀 수 없는데 말이다.
배열과 오브젝트에서는 괜찮은가 보다.

오브젝트에는 배열도 다른 오브젝트도 들어갈 수 있다.
물론 배열에도 오브젝트를 넣을 수 있다. 
*/