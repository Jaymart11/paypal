const login = document.querySelectorAll(".btn-login");

console.log(login);

login.forEach((l) => {
  l.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "login"; // Redirect after alert
  });
});
