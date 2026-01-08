// ================= LOGIN =================
function login(event) {
  event.preventDefault();

  const user = document.getElementById("username")?.value;
  const pass = document.getElementById("password")?.value;

  if (user === "admin" && pass === "123") {
    localStorage.setItem("login", "true");
    window.location.href = "umur.html";
  } else {
    alert("Username atau password salah!");
  }
}

// ================= PROTEKSI UMUR =================
if (window.location.pathname.includes("umur.html")) {
  if (!localStorage.getItem("login")) {
    window.location.href = "index.html";
  }
}

// ================= HITUNG UMUR =================
function hitungUmur() {
  const input = document.getElementById("tglLahir");
  const hasil = document.getElementById("hasil");

  if (!input || !hasil) return;

  if (!input.value) {
    alert("Masukkan tanggal lahir!");
    return;
  }

  const lahir = new Date(input.value);
  const sekarang = new Date();

  let umur = sekarang.getFullYear() - lahir.getFullYear();
  const m = sekarang.getMonth() - lahir.getMonth();
  if (m < 0 || (m === 0 && sekarang.getDate() < lahir.getDate())) {
    umur--;
  }

  hasil.innerHTML = `Umur kamu sekarang: <b>${umur} tahun</b>`;
}

// ================= LOGOUT =================
function logout() {
  localStorage.removeItem("login");
  window.location.href = "index.html";
}
