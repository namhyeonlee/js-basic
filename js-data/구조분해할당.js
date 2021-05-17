//구조 분해 할당(destructuring assignment) -> 객체에 속성이 많을 때 편리
// 비구조화 할당

const user = {
    name: 'Heropy',
    age: 85,
    email: 'abc@gamil.com'
}

const { name: heropy, age, email, address = 'Korea' } = user

//name: heropy -> name 이라는 변수 이름을 heropy로 변경
// address = 'Korea' -> address 라는 속성에 korea라는 기본값 입력


//배열 데이터 구조 분해 할당
const fruits = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits
//객체는 중괄호, 배열은 대괄호로 구조분해할당
const [, , b] = fruits
//세번째 데이터 추출하는 방식
