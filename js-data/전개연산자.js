//전개 연산자(spread)

const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)
console.log(...fruits)
//... 전개 연산자 -> 배열 데이터를 apple, banana, cherry로 나열 해줌 


function toObject(a, b, c) {
    return {
        a: a,
        b: b,
        c:c
    }
}

console.log(toObject(...fruits))
console.log(toObject(fruits[0], fruits[1], fruits[2]))

//위 둘다 같은 결과 {a:"Apple", b:"Banana", c:"Cherry"}


function toObject(a, b, ...c) {
    //...c -> 나머지 매개변수라고 불림 ->a,b 각각 해당하는 인수 외에 나머지로 남는 모든 인수를 c로 받음
    return {
        a: a,
        b: b,
        c:c
    }
}

