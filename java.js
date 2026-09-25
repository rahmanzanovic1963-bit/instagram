const followButtons = document.querySelectorAll(".btn-follow");

followButtons.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");

    if (this.classList.contains("active")) {
      this.textContent = "отписатся";
    } else {
      this.textContent = "Подписаться в ответ";
    }
  });
});
