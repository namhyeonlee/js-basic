const user = {
    name: 'heropy',
    age: 85,
    emails: [
        'thesecon@gmail.com',
        'neo@zillinins.com'
    ]
}

//데이터 관리

//localStorage.setItem('key','value')
localStorage.setItem('user', user)
//=> user 객체를 그대로 넣으면 [object object] 배열 형태로 저장됨
// 문자형태로 변환이 필요
localStorage.setItem('user', JSON.stringify(user))

const str = localStorage.getItem('user')
// => user 문자데이터를 객체 데이터로 전환할 필요가 있음
const obj = JSON.parse(localStorage.getItem('user'))

//lcoalstorage 저장한 내용 수정하기
obj.age = 22
localStorage.setItem('user', JSON.stringify(user))

localStorage.removeItem('user')