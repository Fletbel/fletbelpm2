// const loginState = document.getElementById('loginBtnBtn');
// loginState.addEventListener('click', function () {
//   alert('welcome message here');
// })

// loginIDBtn.addEventListener('click', function () {
//   ;
// })

function emptyBtn(field) {
  field.value = "";
}

function clearText() {
  const field = document.getElementById('loginIDBtn');
  field.value = "";
}

function handleLogin(id, pwd) {
  // console.log(`typeof id: ${typeof id.value}`);
  // const thisid = document.getElementById('loginBtnBtn');
  // console.log(`thisid: ${thisid}`);
  if (!checkID(id.value)) {
    console.log("id error");
    return 0;
  } else if (!checkPWD(pwd.value)) {
    console.log("password error");
    return 0;
  } else {
    console.log("login success");
    return 1;
  }
}

function checkID(id) {
  return (id === "admin");
}

function checkPWD(pwd) {
  return (pwd === "root");
}