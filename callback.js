//콜백 callback
//함수의 인수로 사용되는 함수

//setTimeout(함수, 시간)

function timeout() {
    setTimeout(() => {
        console.log('Heropy!')
    }, 3000)
    
}

timeout()
console.log('Done!')

//console.log('Done!')가 먼저 출력되고 timeout()함수가 출력됨

//내가 보장하고 싶은 곳에 함수 실행하려면

function timeout(cb) {
    setTimeout(() => {
        console.log('Heropy!')
        cb()
    }, 3000)

    timeout(() => {
        console.log('Done!')
    })
    
}

