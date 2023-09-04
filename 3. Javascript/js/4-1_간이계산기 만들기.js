function calculate(op) {
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
