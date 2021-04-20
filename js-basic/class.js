// const heropy = {
//     firstName: 'Heropy',
//     lastName: 'Park',
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`
//         // = return `${heropy.firstName} ${heropy.lastName}`
//         //this=함수 이름 -> this를 쓰는 이유는 함수이름이 바뀔 수도 있기 때문
        
//     }
// }

// console.log(heropy.getFullName())

// const amy = {
//      firstName: 'Amy',
//     lastName: 'Clarke',
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`
        
//     }
// }

//똑같은 함수를 반복할 때 class 사용
//생성자함수 사용할때는 대문자로 시작

function User(first, last) {
    this.firstName = first
    this.lastName = last
    
}

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

//user 함수에 숨어져있는 proto타입에 getFullName을 할당

const heropy = new User('heropy', 'park')
const amy = new User('amy', 'park')
const neo = new User('neo', 'park')

console.log(heropy.getFullName())
console.log(amy)
console.log(neo)