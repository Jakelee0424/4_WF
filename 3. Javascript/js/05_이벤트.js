// 인라인 이벤트 모델 확인
function test1(btn){

    btn.style.backgroundColor = "black";
    btn.style.color = "white";
}


// 고전 이벤트 모델 확인

//  * 주의사항
// 고전/표준 이벤트 모델은 렌더링이 완료된 HTML 요소에
// 이벤트 관련 동작을 부여하는 코드
// -> 렌더링이 되지 않은 요소에는 동작 추가 불가능
//    문제원인 = 코드를 위에서부터 해석하기 때문에

// -> body태그 맨 아래에 추가하면 해결

document.getElementById("test2-1").onclick = function(){
    //익명 함수로 연결(이벤트 핸들러에 많이 사용함)
    
    alert("고전 이벤트 모델로 출력된 대화상자");
}

// 이벤트 제거
document.getElementById("test2-2").onclick = function(){
    document.getElementById("test2-1").onclick = null;
}

// 고전 이벤트 단점
document.getElementById("test2-3").onclick = function(event){
    // 버튼색 바꾸기
    // 방법 1) 요소를 문서에서 찾아서 선택
    // document.getElementById("test2-3").style.backgroundColor = "pink";
    
    // 방법 2) 매개변수 e 또는 event활용(국룰)
    // -> 이벤트 핸들러에 e 또는 event를 작성하는 경우
    // 해당 이벤트와 관련된 모든 정보가 담긴 이벤트 객체 반환
    console.log(event);
    
    // event.target.style.backgroundColor = "pink";
    // event.target : 이벤트가 발생한 요소

    // 방법 3) this 활용
    this.style.backgroundColor = "pink";
}

document.getElementById("test2-3").onclick = function(){
    this.style.fontSize = "30px";
}


// 표준 이벤트 모델

document.getElementById("test3").addEventListener("click", function(){
   
    this.style.width = this.clientWidth + 20 + "px";

});

document.getElementById("test3").addEventListener("click", function(){
   
    this.style.height = this.clientHeight + 20 + "px";
    
});


document.getElementById("test3").addEventListener("mouseout", function(){
    
    this.style.width = this.clientWidth - 20 + "px";
    this.style.height = this.clientHeight - 20 + "px";

});

//-------------------------------------------------

document.getElementById("changeBtn1").addEventListener("click", function(){

    const color = document.getElementById("input1").value;
    // input에 입력되는 값은 value임

    document.getElementById("div1").style.backgroundColor = color;

});

document.getElementById("input2").addEventListener("change", function(){
    // 값의 변경을 감지하여 이벤트 발생
    // 입력된 값이 변할 때를 change라고 인식하지 못함
    // -> 입력이 완료된 후 포커스를 잃거나, enter를 입력할때를 change로 인식

    const color = document.getElementById("input2").value;

    document.getElementById("div2").style.backgroundColor = color;

});

// a태그 기본 이벤트 제거
document.getElementById("moveNaver").addEventListener("click", function(e){

    // 매개변수 e 혹은 event == 이벤트 발생 객체
    // 이벤트와 관련된 정보가 담겨있는 객체

    e.preventDefault(); // HTML요소가 가지고 있는 기본 이벤트를 막음(제거)

});