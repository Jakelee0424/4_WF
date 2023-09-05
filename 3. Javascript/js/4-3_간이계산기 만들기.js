function calculate(btn) {
    
    //btn에는 this(클릭된 버튼 요소)가 전달되어짐
    console.log(btn);

    const op = btn.innerText;

    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    // eval("코드 형식 문자열")
    // -> 작성된 문자열을 js코드로 해석하는 함수
    // -> 속도 + 보안 이슈로 인해 지양하는 중
    
    // -> 해결방법 : new function() 사용

   document.getElementById("result").innerText = new functionfunction("return " num1 + op + num2)();
}
