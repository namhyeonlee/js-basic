class User {
    constructor (first, last) {
        this.firstName = first
        this.lastName = last
    }

    getFullName() {
        //es6 prototype을 사용하지 않아도 getfullname과 같은 메소드를 사용할 수 있음
        return `${this.firstName} ${this.lastName}`
    }
}


const heropy = new User('heropy', 'park')
const amy = new User('amy', 'park')
const neo = new User('neo', 'park')

console.log(heropy.getFullName())
console.log(amy)
console.log(neo)