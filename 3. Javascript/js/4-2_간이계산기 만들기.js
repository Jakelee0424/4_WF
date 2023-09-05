function calculate(btn) {
    
    //btn에는 this(클릭된 버튼 요소)가 전달되어짐
    console.log(btn);

    const op = btn.innerText;

    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    let res = 0;

    switch (op) {
        case '+': res = num1 + num2; break;
        case '-': res = num1 - num2; break;
        case '*': res = num1 * num2; break;
        case '/': res = num1 / num2; break;
        case '%': res = num1 % num2; break;
    }

    document.getElementById("result").innerText = res;

}
