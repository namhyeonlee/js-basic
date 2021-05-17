import _ from 'lodash';

//얕은복사(shallow copy)와 깊은복사(deep copy)

const user = {
    name: 'heropy',
    age: 85,
    emails:['thesecon@gamil.com']

}

const copyUser = user;
//-> user와 copyUser은 같은 공간 데이터를 쓰게 됨

user.age = 22
//user.age 데이터를 변경하면 user age 정보뿐만 아니라
//copyUser age데이터도 22로 변경이 되어집


//복사방법 1
const copyUser = Object.assign({}, user);
//{}: 대상객체, user:출처객체

//복사방법2
const copyUser = { ...user };


//깊은복사
const copuUser =_.cloneDeep(user)