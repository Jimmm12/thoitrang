function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
      username: username,
      email: email,
      password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("dang ky thanh cong");
    window.location.href = "user.html";
  }
  function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user){
      alert("BẠN NHẬP SAI USERNAME HOẶC PASSWORD");
    } else if (
      username == data.username &&
      email == data.email &&
      password == data.password
    ) {
      alert("dang nhap thanh cong");
      window.location.href = "index.html";
    } else {
      alert("dang nhap that bai");
    }
  }