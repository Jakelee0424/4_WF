function getInnerText(){
    // html 문서 내에서 아이디가 "test1" 요소를 얻어와 대입
    const test1 = document.getElementById("test1");

    // test1 변수에 대입된 요소에서 내용을 얻어와 console에 출력
    console.log(test1.innerText);
}

function setInnerText(){
    // html 문서 내에서 아이디가 "test1" 요소를 얻어와 대입
    const test1 = document.getElementById("test1");

    // test1 변수에 대입된 요소에서 내용을 얻어와 console에 출력
    test1.innerText = "innerText로 변경된 <br> 내용입니다."
}


// innerHTMl로 읽어오기

function getInnerHTML1(){
    const test2 = document.getElementById("test2");

    console.log(test2.innerHTML);
}

function setInnerHTML1(){
    const test2 = document.getElementById("test2");

    test2.innerHTML = "<b>innerHTML로</b> 변경된 <br>내용입니다.";
}


// innerHTML 응용
function add(){
    // 1) 아이디가 area1인 요소 얻어오기
    const area1 = document.getElementById("area1");
    
    // 2) area1에 box2 추가(누적 대입)
    area1.innerHTML += "<div class='box2'></div>"
}


// alert
function fnAlert(){
    window.alert("alert 버튼 클릭됨");

    // window는 브라우저 자체를 나타내는 객체
    // -> JS 코드는 브라우저(window) 내부에서 실행되는 코드이기 때문에,
    // window 생략 가능
}


// confirm
function fnConfirm(){
    if(confirm("버튼을 분홍색으로 바꾸시겠습니다.")){
        document.getElementById("confirmBtn")
        .style.backgroundColor = "pink";
    }else{
        document.getElementById("confirmBtn")
        .style.backgroundColor = "red";
    }
}

function fnPrompt(){
    const input = prompt("이름을 입력해 주세요");

    const promptResult = document.getElementById("promptResult");

    if(input != null){
        promptResult.innerText = input + "님 환영합니다.";
    }else{
        promptResult.innerText = "이름을 입력해주세요";
        alert("취소를 누르셨습니다.")
    }
}