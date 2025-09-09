document.addEventListener("DOMContentLoaded", () => {
  const showPopupBtn = document.getElementById("showPopupBtn");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");

  showPopupBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});
