document.addEventListener("DOMContentLoaded", () => {
  const showPopupBtn = document.getElementById("showPopupBtn");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");

  // Pastikan tombol bisa disentuh di semua perangkat
  const openPopup = () => {
    popup.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Cegah scroll saat popup terbuka
  };

  const closePopup = () => {
    popup.classList.add("hidden");
    document.body.style.overflow = ""; // Balikin scroll
  };

  showPopupBtn.addEventListener("click", openPopup);
  closeBtn.addEventListener("click", closePopup);

  // OPTIONAL: Tutup popup jika klik di luar kotak
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      closePopup();
    }
  });
});
