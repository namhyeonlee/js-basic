
console.log(typeof 'hello world!')
//typeof를 사용하면 어떤 타입인지 알 수 있음
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
//undefined: 의도하지 않은 값, null: 의도한 값
console.log(typeof {})
console.log(typeof [])



function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(getType(123))
console.log(getType(false))


//산술 연산자(arithemetic operator)

//할당 연산자

let a = 2
//a = a+1
a += 1

console.log(a)

//함수 복습

function sum(x, y) {
   console.log(x+y)
}
sum(1, 3)

function sum2(x, y) {
    return x+y
}
console.log(sum2(1, 3))

function sum3(x, y) {
    return x + y

    //return -> 리턴 뒤에 값을 반환 및 리턴을 사용한 부분에서 함수가 종료됨을 의미
    //그래서 리턴 이하에 있는 코드들이 실행이 안됨
}
 
function sum4(x, y) {
    if (x < 2) {
        return
        //x가2보다 작을경우 함수를 종료
    }
    return x+y
    
}
console.log(sum4(1, 3))

// argument는 인수가 너무 많아서 일일이 지정하기 힘들 때 사용하지만 권장하지는 않음
function sum5() {
    console.log(arguments)
    //매개변수를 넣지 않아도 자바스크립트 객체인 argument를 넣어서 값 내용을 확인 할 수 있음
    //배열 형태로 값이 들어감
    return arguments[0] + arguments[1]
}

console.log(sum5(7,3))