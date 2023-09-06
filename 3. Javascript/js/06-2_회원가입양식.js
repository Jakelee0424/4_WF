const checkObj = {
    "inputId" : false,
    "inputPw" : false,
    "inputPwConfirm" : false,
    "inputName" : false,
    "gender" : false,
    "inputTel" : false
}

document.getElementById("inputId").addEventListener("change", function(){

    const regExp = /^[a-z][\w-_]{5,13}$/;

    if(regExp.test(this.value)){
        this.style.backgroundColor = "springgreen";
        this.style.color = "black";
        checkObj.inputId = true;
    }else{
        this.style.backgroundColor = "red";
        this.style.color = "white";
        checkObj.inputId = false;
    }

});

const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");

inputPwConfirm.addEventListener("keyup", function(){

    if(inputPw.value.length == 0){
        this.value = "";
        alert("비밀번호를 입력해주세요");
        inputPw.focus();
        inputPwConfirm = false;
    }

});

const pwMessage = document.getElementById("pwMessage");

inputPw.addEventListener("keyup", function(){
    if((inputPw.value == inputPwConfirm.value) && inputPw.value.length != 0){
        pwMessage.innerText = "비밀번호 일치";
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");
        checkObj.inputPw = true;
        checkObj.inputPwConfirm = true;
    } else {
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
        checkObj.inputPw = false;
        checkObj.inputPwConfirm = false;
    }

})

inputPwConfirm.addEventListener("keyup", function(){
    if((inputPw.value == inputPwConfirm.value) && inputPw.value.length != 0){
        pwMessage.innerText = "비밀번호 일치";
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");
        checkObj.inputPw = true;
        checkObj.inputPwConfirm = true;
    }  else {
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
        checkObj.inputPwConfirm = false;
    }
});


document.getElementById("inputName").addEventListener("keyup", function(){

    const nameMessage = document.getElementById("nameMessage");
    const regExp = /^[가-힣]{2,5}$/;

    if(regExp.test(this.value)){
        nameMessage.innerText = "정상 입력";
        nameMessage.classList.add("confirm");
        nameMessage.classList.remove("error");
        checkObj.inputName = true;
    }else{
        nameMessage.innerText = "한글만 입력하세요";
        nameMessage.classList.remove("confirm");
        nameMessage.classList.add("error");
        checkObj.inputName = false;
    }

})

function validate(){

    const gender = document.getElementsByName("gender");

    if(!gender[0].checked && !gender[1].checked){
        alert("성별을 선택해주세요");
        checkObj.gender = false;
        return false;
    }else{
        checkObj.gender = true;
    }

    const inputTel = document.getElementById("inputTel");
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(!regExp.test(inputTel.value)){
        alert("전화번호의 형식이 올바르지 않습니다.")
        checkObj.inputTel = false;
        return false;
    }else{
        checkObj.inputTel = true;
    }

    for (let key in checkObj) {
        if ( !checkObj[key] ){
            return false;
        }
    }

    alert("회원가입 완료");
    return true;

}