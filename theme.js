const toggleButton = document.getElementById("theme-toggle");

// Ambil tema yang tersimpan
const savedTheme = localStorage.getItem("theme");

// Terapkan tema saat halaman dibuka
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "☀️";
}

// Ganti tema saat tombol diklik
toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {
    toggleButton.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});