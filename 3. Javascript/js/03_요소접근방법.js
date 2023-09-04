// id로 접근하기
function accessId(){

    const div1 = document.getElementById("div1");

    // 접근한 요소의 배경색 얻어오기
    const bgColor = div1.style.backgroundColor;

    if(bgColor == "red"){
        div1.style.backgroundColor = "yellow";
    }else{
        div1.style.backgroundColor = "red";
    }
}

function accessClass(){
    // 요소를 여러개 접근하는 경우 (배열) 형태로 반환
    const arr = document.getElementsByClassName("div2");

    console.log(arr);

    // 인덱스를 이용해 요소 하나씩 접근 

    arr[0].style.backgroundColor = "pink";
    arr[1].style.backgroundColor = "aqua";
    arr[2].style.backgroundColor = "red";

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].style.backgroundColor == "pink"){
            arr[i].style.backgroundColor = "aqua";
        }else if(arr[i].style.backgroundColor == "aqua"){
            arr[i].style.backgroundColor = "red";
        }else{
            arr[i].style.backgroundColor = "pink";
        }
    }
}

function accessTagName(){

    const arr = document.getElementsByTagName("li");

    for(let i = 0 ; i<arr.length ; i++){
        const num = arr[i].innerText;
        arr[i].style.backgroundColor = "rgb(130,220," + (50*num) + ")";
    }

}

// name으로 접근하기

function accessName(){

    const hobbyList = document.getElementsByName("hobby");
    let str = "";

    let count = 0;

    for(let i = 0 ; i < hobbyList.length ; i++){
        if(hobbyList[i].checked){
            str += hobbyList[i].value + " / ";
            count++;
        }
    }

    document.getElementById("name-div").innerText = str;
    document.getElementById("name-div").innerHTML += "<br><br>선택된 개수 : " + count;
}

// css선택자로 접근하기

function accessCss(){
    // querySelector(); 첫번째 요소
    // querySelectorAll() : 전체 요소

    document.querySelector("#css-div").style.border = "3px solid red";

    document.querySelector("#css-div > div").style.fontSize = "30px";

    const arr = document.querySelectorAll("#css-div > div");

    for(let i = 0 ; i < arr.length ; i++){
        arr[i].style.backgroundColor = "gold";
    }

}

// 카카오톡 채팅 만들기

function readValue(){
    const bg = document.getElementById("chatting-bg");
    const input = document.querySelector("#chatting-input");

    // input에 입력된 값이 있는 경우
    if(input.value.trim().length > 0){
        // trim : 문자열.trim()
        // 문자열 양 끝의 공백을 모두 제거
        // e.g. ) "          J  K      " -> "J  K"

        bg.innerHTML += "<p><span>" + input.value + "</span></p>" 
        input.value = null;
        input.focus();
        
        // 요소.scrollTop : 요소 내부 현재 스크롤 위치 반환
        // 요소.scrollHeight : 스크롤의 전체 높이 
        bg.scrollTop = bg.scrollHeight;
    }else{
        alert("채팅 내용을 입력해주세요");
        input.focus();
    }

    // 입력 후 다시 input에 포커스

}

//input 태그에 연결된 키가 눌러졌을 대 엔터인 경우를 검사하는 함수

function inputEnter(){
    // 현재 눌러진 키 확인
    console.log(window.event.key);

    if(event.key == "Enter"){
        readValue();
    }
}