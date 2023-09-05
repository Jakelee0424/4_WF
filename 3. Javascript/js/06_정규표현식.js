// 정규표현식 객체 생성 + 확인하기
document.getElementById("check1").addEventListener("click", function () {

    // 정규표현식 객체 생성 

    const regExp1 = new RegExp("script");
    // "script"와 일치하는 문자열이 있는지 검사하는 정규표현식

    const regExp2 = /java/;
    // "java"와 일치하는 문자열이 있는지 검사하는 정규표현식

    const str1 = "저희는 지금 javascript를 공부하고 있습니다."
    const str2 = "servlet/jsp(java server page)도 조만간 할 겁니다."
    const str3 = "java, java, java"

    console.log("regExp1.test(str1) : " + regExp1.test(str1));
    console.log(regExp1.exec(str1));

    console.log("regExp2.test(str2) : " + regExp2.test(str2));
    console.log(regExp2.exec(str2));

    // 없는 경우

    console.log("regExp1.test(str2) : " + regExp1.test(str2));
    console.log(regExp1.exec(str2));

    // 일치하는게 여러개 있는 경우

    console.log("regExp2.test(str3) : " + regExp2.test(str3));
    console.log(regExp2.exec(str2)); //맨처음 것만 찾음

})


// 메타 문자 확인하기

document.getElementById("btn1").addEventListener("click", function(){

    const div1 = document.getElementById("div1");

    const regExp1 = /a/;
    div1.innerHTML += "/a/, apple : " + regExp1.test("apple") + "<hr>";
    div1.innerHTML += "/a/, price : " + regExp1.test("price") + "<hr>";
    
    const regExp2 = /[abcd]/;
    div1.innerHTML += "/[abcd]/, apple : " + regExp2.test("apple") + "<hr>";
    div1.innerHTML += "/[abcd]/, fkoewrm : " + regExp2.test("fkoewrm") + "<hr>";
    div1.innerHTML += "/[abcd]/, decline : " + regExp2.test("decline") + "<hr>";
    
    const regExp3 = /^group/; //문자열의 시작이 group인지 확인
    div1.innerHTML += "/^group/, group100 : " + regExp3.test("group100") + "<hr>";
    div1.innerHTML += "/^group/, 100group : " + regExp3.test("100group") + "<hr>";
    
    const regExp4 = /group$/; //문자열의 끝이 group인지 확인
    div1.innerHTML += "/$group/, group100 : " + regExp4.test("group100") + "<hr>";
    div1.innerHTML += "/group$/, 100group : " + regExp4.test("100group") + "<hr>";


});

// 이름 유효성 검사

document.getElementById("inputName").addEventListener("keyup", function(){

    const result = document.getElementById("inputNameResult")
    
    if(this.length == 0){
        result.innerText = "";
        return;
    }    
    
    const regExp = /^[가-힣]{2,5}$/;

    // 유효성 검사
    if(regExp.test(this.value)){
        //유효한 경우
        result.innerText = "유효한 형식입니다.";
        result.style.color = "green";
        result.style.fontWeghit = "bold";
    } else{
        result.innerText = "유효하지 않습니다.";
        result.style.color = "red";
        result.style.fontWeghit = "bold";
    } 

});


// 주민등록번호 정규식 검사
document.getElementById("inputPno").addEventListener("keyup", function(){

    const span = document.getElementById("inputPnoResult");

    if(this.value.length == 0){
        span.innerText = "주민등록번호를 작성해주세요";
    
        span.classList.remove("confirm");
        span.classList.remove("error");
        return;
    }

    const regExp = /^\d{6}\-\d{7}$/;

    if(regExp.test(this.value)){
        span.innerText = "유효한 주민등록번호 형식입니다.";
        span.classList.remove("error");
        span.classList.add("confirm");
    } else{
        span.innerText = "유효하지 않은 주민등록번호 형식입니다.";
        span.classList.remove("confirm");
        span.classList.add("error");
    }
});