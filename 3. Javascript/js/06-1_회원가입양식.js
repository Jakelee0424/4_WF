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

        if (regExp.test(this.value)) {
            this.style.backgroundColor = "springgreen";
            this.style.color = "black";
            checkObj.inputId = true;
        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";
            checkObj.inputId = false;
        }
})


const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");

inputPwConfirm.addEventListener("keyup", function(){

    if(inputPw.value.length == 0){
        this.value = "";
        alert("비밀번호를 입력해주세요")
        inputPw.focus();
        checkObj.inputPw = false;
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
    }  else {
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
        checkObj.inputPwConfirm = false;
    }

});

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


document.getElementById("inputName").addEventListener("change", function () {

    const regExp = /^[가-힣]{2,5}$/;

    const nameMessage = document.getElementById("nameMessage");

    if (regExp.test(this.value)) {
        nameMessage.innerText = "정상 입력"
        nameMessage.classList.add("confirm");
        nameMessage.classList.remove("error");
        checkObj.inputName = true;
    } else {
        nameMessage.innerText = "한글만 입력하세요";
        nameMessage.classList.add("error");
        nameMessage.classList.remove("confirm");
        checkObj.inputName = false;
    }
});


function validate(){
   
    const gender = document.getElementsByName("gender");
    // 리스트 형태로 넘어옴


    if (!gender[0].checked && !gender[1].checked) {
        alert("성별을 선택해주세요");
        checkObj.gender = false;
        return false;
    } else {
        checkObj.gender = true;
    }

    const phoneCheck = document.getElementById("inputTel");
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if (!regExp.test(phoneCheck.value)) {
        alert("전화번호의 형식이 올바르지 않습니다.");
        checkObj.inputTel = false;
        return false;
    } else {
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



// document.getElementById("inputId").addEventListener("change", function() {

//     const regExp = /^[a-z][a-zA-Z0-9\-\_]{5,13}$/;

//     if (this.value.length == 0) {
//         span.innerText = "";
//         return;
//     }

//     if (regExp.test(this.value)) {
//         this.style.backgroundColor = "springgreen";
//         this.style.color = "black";
//     } else {
//         this.style.backgroundColor = "red";
//         this.style.color = "white";
//     }

// });

// document.getElementById("inputPwConfirm").addEventListener("keyup", function () {

//     const span = document.getElementById("inputPw");
//     const pwMg = document.getElementById("pwMessage");

//     if (span.value.length == 0) {
//         this.value = null;
//         span.focus();
//         alert("비밀번호를 입력해주세요");
//     }

//     if ((span.value == this.value) && span.value.length != 0) {
//         pwMg.innerText = "비밀번호 일치";
//         pwMg.classList.add("confirm");
//         pwMg.classList.remove("error");
//     } else {
//         pwMg.innerText = "비밀번호 불일치";
//         pwMg.classList.add("error");
//         pwMg.classList.remove("confirm");
//     }

// });

// document.getElementById("inputName").addEventListener("keyup", function () {

//     const span = document.getElementById("nameMessage");

//     const regExp = /^[가-힣]{2,5}$/;

//     if (this.value.length == 0) {
//         span.value = "";
//         span.classList.remove("confirm");
//         span.classList.remove("error");
//         return;
//     }


//     if (regExp.test(this.value)) {
//         span.innerText = "정상 입력"
//         span.classList.add("confirm");
//         span.classList.remove("error");
//     } else {
//         span.innerText = "한글만 입력하세요";
//         span.classList.add("error");
//         span.classList.remove("confirm");
//     }

// });

// function validate(e) {

//     const gender = document.getElementsByName("gender");
//     const phoneCheck = document.getElementById("inputTel");
//     const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

//     if (gender.value == null) {
//        alert("성별을 선택해주세요");
//        e.preventDefault();

//     } else{
        
//         if (regExp.test(phoneCheck.value)) {
//             return true;
//         } else {
//             alert("전화번호의 형식이 올바르지 않습니다.");
//             e.preventDefault();
//         }

//     }

// };