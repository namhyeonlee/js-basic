const result = 'Hello world'.indexOf('heory')
console.log(result)
//String.prototype.indexOf()
//indexof()메서드는 호출한 스트링 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환, 
//일치하는 값이 없으면 -1을 반환

const str = '0123'
console.log(str.length)

const str2 = 'hello world'

console.log(str2.indexOf('hello') !== -1)
console.log(str2.slice(0, 3))
console.log(str2.replace('world', 'heropy'))

const str3 = 'thesecon@gamil.com'
console.log(str3.match(/.+(?=@)/))

const str4 = '   hello world   '
console.log(str4.trim())
//공백없이 출력