// 변수 선언 위치에 따른 구분 
// console.log("js코드를 함수 내부가 아닌 js파일 또는 script태그에 바로 작성하면 html 랜더링시 바로 수행된다.")

// var num1 = 1; // 전역변수
// num2 = 2; // 전역변수

// console.log(num1);
// console.log(num2);

// var num1 = 20;
// num2 = 40;

// console.log(num1);
// console.log(num2);

function test(){
    var num3 = 3;
    num4 = 4;

    if(true){
        var num5 = 5; //function 지역변수, but var는 밖에서도 사용 가능
        // let num5 = 5; 
        num6 = 6;
    }

    // console.log(num6);
}

test(); // 함수 호출


// console.log(num3); // 에러
console.log(num4); // 전역변수라 사용 가능
console.log(num6);


// 자료형 확인
function typeTest(){

    const typeBox = document.getElementById("typeBox");

    let temp; // 할당된 값이 없으므로 == undefined 
    typeBox.innerHTML = "temp : " + temp; 

    const name = "홍길동";
    // typeof 변수명 : 해당 변수의 자료형을 검사하는 연산자
    typeBox.innerHTML += "<br>name : " + name + " / " + typeof name;

    const gender = 'M';
    typeBox.innerHTML += "<br>gender : " + gender + " / " + typeof gender;
    // js는 char 자료형 X -> "", '' 모두 String 리터럴 표기법
    
    const age = 20; 
    const height = 178.9;

    typeBox.innerHTML += "<br>age : " + age + " / " + typeof aeg;
    typeBox.innerHTML += "<br>height : " + height + " / " + typeof height;
    
    const isTrue = true;
    typeBox.innerHTML += "<br>isTrue : " + isTrue + " / " + typeof isTrue;
    
    //java -> int[] arr = {1,2,3,4,5};
    //javascript -> const arr = [1,2,3,4,5];
    
    const arr = [10,20,30,40];
    typeBox.innerHTML += "<br>arr : " + arr + " / " + typeof arr;
    
    
    //자바스크립트 객체 k:v (Map형식)으로 작성
    const user = {"id" : "user01", "pw" : "pass01"};
    typeBox.innerHTML += "<br>user : " + user + " / " + typeof user;
    
    //객체 내용 출력 방법 1)
    typeBox.innerHTML += "<br>user.id : " + user.id + " / " + typeof user.id;
    typeBox.innerHTML += "<br>user.pw : " + user.pw + " / " + typeof user.pw;
    
    //객체 내용 출력 방법 2) -> 객체 전용 for문 : for..in
    for(let key in user){
        //user 객체의 키(id, pw)를 반복할 대마다 하나씩 얻어와 key 변수에 저장
        typeBox.innerHTML += "<br>user.[key] : " + user[key] + " / " + typeof user[key];
    }
    
    //function(함수도 자료형)
    
    // 변수명 == 함수명
    const sumFn = function(n1,n2){ // 익명 함수
        return n1 + n2;
    }
    
    //함수명만 작성되면 -> 함수에 작성된 코드가 출력(문자형태로)
    typeBox.innerHTML += "<br>sumFn : " + sumFn + " / " + typeof sumFn;
    
    //함수명() -> 함수 실행
    typeBox.innerHTML += "<br>sumFn(10, 20) : " + sumFn(10, 20) + " / " + typeof sumFn;
    
    

}



