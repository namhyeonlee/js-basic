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