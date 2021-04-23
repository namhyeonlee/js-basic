// .filter()

//filter, map은 원본 배열에 영향을 주지 않음

const numbers = [1, 2, 3, 4]
const fruits = ['apple', 'Banana', 'cherry']


const a = numbers.map(number => {
    return number <3
})

console.log(a)

const b = numbers.filter(number => {
    return number < 3
})
console.log(b)

// .find() .findIndex()

const c = fruits.find(fruit => /^B/.test(fruit))
console.log(c)

const d= fruits.findIndex(fruit => /^B/.test(fruit))
console.log(d)

//.include()

const e = fruits.includes(3)
const g = fruits.includes('heery')

//.push() .unshift()
//원본 수정됨 주의

numbers.push(5)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)


//reverse
numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)

//.splice()
//원본 수정됨 주의

numbers.splice(2, 1)

numbers.splice(2, 0, 999)

console.log(numbers)