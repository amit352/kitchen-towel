var form_login = document.getElementById("login-form");
form_login.onsubmit = function(e) {
  e.preventDefault();
  // var check_confirm = checkpwdc();
  // var check_pass = checkpwd();
  var flag = 0;
 ;
  if(check() == false)
  {
    flag = 1;
  }
  var email = form_login.email.value;
  var pass = form_login.pass.value;
  var pass_confirm = form_login.pass_confirm.value;
  var hash = CryptoJS.SHA1(pass);
  var passhash = CryptoJS.enc.Hex.stringify(hash);
  
  console.log("e1");
  console.log(email);
  if(email == "")
  {
    console.log("e2");
    flag = 1;
    var div = document.getElementById("warning");
    var span = document.createElement("span");
    span.innerHTML = "please enter your email";
    div.append(span);
  }

  console.log("pa1");
  if(pass == "")
  {
    console.log("pa2");
    flag = 1;
    var div = document.getElementById("checktext1");
    var span = document.createElement("span");
    span.innerHTML = "please enter your password";
    div.append(span);
    
  }
  console.log("pc1");

  if(pass_confirm == "")
  {
    console.log("pc2");
    flag = 1;
    var div = document.getElementById("checktext2");
    var span = document.createElement("span");
    span.innerHTML = "please confirm your password";
    div.append(span);
  }
  console.log("ma1");

  if(pass != pass_confirm)
  {
    console.log("ma2");
    flag = 1;
    var div = document.getElementById("checktext2");
    var span = document.createElement("span");
    span.innerHTML = "passwords did not match, please try again";
    div.append(span);
  }



  
  if(flag == 0)
  {
  $.ajax({
    type: "POST",
    url: "https://soy-sauce.herokuapp.com/user/register",
    data: {
      email: email,
      password: passhash
    },
    success: function(msg) {
      console.log(msg);
      window.location.href='../index.html';
    },
    fail: function() {
      console.log("login failed");
    }
  });
}
};

function checkpwd() {
  var check = false;
  var password = document.getElementById("exampleInputPassword1").value;
  if (password.length < 6) {
    document.getElementById("checktext1").innerHTML = "  × less than 6 digits";
    check = false;
  } else {
    document.getElementById("checktext1").innerHTML = "  √";
    check = true;
  }
  return check;
}
function checkpwdc() {
  var check = false;
  var password = document.getElementById("exampleInputPassword1").value;
  var pwdc = document.getElementById("exampleInputPassword2").value;
  if (password != pwdc) {
    document.getElementById("checktext2").innerHTML =
      "  × must mach the previous entry";
    check = false;
  } else {
    document.getElementById("checktext2").innerHTML = "  √";
    check = true;
  }
  return check;
}

function check() {
  var check = checkpwd() && checkpwdc();
  return check;
}
