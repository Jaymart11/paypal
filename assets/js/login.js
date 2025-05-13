document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const successModal = document.getElementById("successModal");

  loginForm.addEventListener("submit", function (e) {
    console.log(e);
    e.preventDefault();

    successModal.style.display = "block";

    setTimeout(() => {
      successModal.style.display = "none";

      window.location.href = "/";
    }, 1500);
  });
});
