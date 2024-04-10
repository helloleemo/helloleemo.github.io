let btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let alertClosed = event.target.closest(".alert");
    if (alertClosed) {
      alertClosed.remove();
    }
  });
});
