document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");

  // Tampilkan popup setelah 1 detik
  setTimeout(() => {
    popup.classList.remove("hidden");
  }, 1000);

  // Tutup popup ketika tombol ditekan
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});
