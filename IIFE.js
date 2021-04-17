//즉시실행함수
//IIFE, Immediately-Invoked Function Expression
//재사용 안 할 함수를 실행할 때 유용

const random = 7
function double() {
    console.log(random*2)
    
}
double();
    
// -> 이런 함수는 재사용을 할 때 유용

    
//즉시실행함수-> 익명함수로 실행
//즉시실행함수는 타입에러가 날 수 있기 때문에 실행한 함수 뒤에 세미콜론 붙이기

//1방법
(function () {
    console.log(random * 2)
})();

//2방법-> 더 권장
(function () {
    console.log(random * 2)
}());