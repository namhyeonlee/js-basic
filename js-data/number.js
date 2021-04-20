const pi = 3.141414124241

const str = pi.toFixed(2)
//tofixed는 숫자를 스트링으로 반환함
console.log(str)
console.log(typeof str)

const integer = parseInt(str)
//parseint는 데이터 중 숫자데이터만 받아서 정수로 반환

const float = parseFloat(str)
//parsefloat은 숫자데이터 중 소수자리도 유지하면서 숫자데이터 반환


console.log('abs:', Math.abs(-12))
console.log('min', Math.min(2, 8))
console.log('max', Math.min(2, 8))
console.log('ceil', Math.ceil(3.14))
console.log('floor', Math.floor(3.14))
console.log('round', Math.round(2, 8))
console.log('random', Math.random())