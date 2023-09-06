// 배열확인 1
document.getElementById("btn1").addEventListener("click", function(){

    // 배열 선언 방법
    const arr1 = new Array(3); // 3칸짜리 배열 생성
    const arr2 = new Array; // 0칸 배열(빈 배열) 생성

    // 각기 다른 자료형 대입
    arr1[0] = "김밥";
    arr1[1] = 23;
    arr1[2] = true;
    console.log(arr1);
    
    arr2[0] = "김밥";
    arr2[1] = 23;
    arr2[2] = true;
    console.log(arr2);


    // 배열 선언방법 2
    const arr3 = [];
    const arr4 = ["사과", "딸기", "바나나"];
    console.log(arr3);
    console.log(arr4);


    // for문으로 배열 요소 반복 접근
    // 1. 일반 for문
    // 2. 향상된 for문(for..of문)
    for(let item of arr4){
        console.log(item);
    }

});

document.getElementById("btn2").addEventListener("click", function(){

    // 비어있는 배열 생성
    const arr = [];

    // push() : 배열 마지막 요소로 추가
    arr.push("삽겹살");
    console.log(arr);

    arr.push("곱창");
    console.log(arr);

    arr.push("초밥");
    console.log(arr);

    arr.push("쌀국수");
    console.log(arr);


    // pop() : 마지막 요소 꺼내오기
    console.log("꺼내온 요소 : " + arr.pop());
    console.log(arr);


    // 배열.indexOf("값") : 일치하는 값 반환
    console.log("초밥 인덱스 : " + arr.indexOf("초밥"));
    console.log("쌀국수 인덱스 : " + arr.indexOf("쌀국수"));
    console.log(arr);


    // 베열.sort() : 배열 내 요소를 오름차순 정렬
    const arr2 = [2,5,123,34,35,4123];
    console.log(arr.sort());
    console.log(arr2.sort()); // 문자열 기준
    
    console.log( arr2.sort( function(a,b){return a-b;} ) ); // 숫자 오름차순
    console.log( arr2.sort( function(a,b){return b-a;} ) ); // 숫자 내림차순


    // toString(), join() : 문자열 출력
    console.log( arr.toString() );
    console.log( arr.join("***") );
    

});