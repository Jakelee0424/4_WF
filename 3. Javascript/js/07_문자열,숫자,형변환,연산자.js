// 문자열 관련 함수
document.getElementById("btn1").addEventListener("click", function(){

    // 문자열.indexof("str")
    // 문자열에서 "str"과 일치하는 부분이 시작되는 인덱스 반환
    // 없으면 -1 반환

    const str1 = "hello world";

    console.log( str1.indexOf("e") );
    console.log( str1.indexOf("1") );
    console.log( str1.indexOf("h") );
    console.log( str1.indexOf("가") );

    // 문자열.substring(시작인덱스(이상), 종료인덱스(미만)) : 문자열 일부 잘라내기

    const str2 = "abcdefg";

    console.log( str2.substring(0,3) );
    console.log( str2.substring(2,6) );

    // 문자열.split("구분자") : 문자열을 "구분자"로 잘라서 배열로 변환
    const str3 = "햄버거, 피자, 김밥, 파스타, 삼겹살";
    const arr = str3.split(", ");
    const arr2 = str3.split("");
    console.log( arr );
    console.log( arr2 );
    

});


// 숫자 관련 함수

document.getElementById("btn2").addEventListener("click", function(){

    // Infinity 리터럴 확인
    console.log(5/0)
    

    // NaN 리터럴 확인
    console.log("aaa" * 100);
    // inNan(값) : 값이 NaN이면 true, 아니면 false
    if( isNaN("aa"*100) ){
        console.log("숫자가 아닙니다.");
    }


    // Math.random() : 0이상 1미만의 난수 발생
    console.log( Math.random() );

    // 소수점 : round(), ceil(), floor(), trunc()
    // -> 소수점 자리 지정 불가능
    // Math.round("값") ..
    console.log( Math.round("14.52342"));
    console.log( Math.ceil("14.52342"));
    console.log( Math.floor("14.52342"));
    console.log( Math.trunc("14.52342"));
    
    // 버튼 배경색 랜덤으로 바꾸기

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = (Math.random()).toFixed(1);
    
    this.style.backgroundColor = "rgb(" + r + "," + g + "," + b + "," + a + ")";


    // 숫자.toFixed(자릿수) : 지정된 자릿수까지 반올림(부동소수점)
    
    console.log( 3.55.toFixed(1) );

});

// 형변환 확인
// parseInt() : 정수로 변환 ( 3.14 -> 3 )
console.log( parseInt(3.14) );

// parseFloat() : 정수 -> 정수, 실수 -> 실수
console.log( parseFloat(3.14) );


