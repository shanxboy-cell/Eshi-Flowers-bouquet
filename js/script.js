// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//  buat supaya gambar nama bunganya bisa masuk ke dalam keranjang

  let keranjangBelanja = [];
 const TombolBelanja = document.querySelectorAll('.item-bunga,  .item-bunga1,  .item-bunga2');
  tombolBelanja.forEach(tombol => {
    tombol.addEventListener('click', function() {
       const idProduk = this.getAttribute('data-id');
      const namaProduk = this.getAttribute('data-nama');
       const produkDipilih = {
        id: idProduk,
        nama: namaProduk,
        jumlah: 1
      };
            const sudahAda = keranjangBelanja.find(item => item.id === idProduk);
      if (sudahAda) {
        sudahAda.jumlah += 1;
      } else {
        keranjangBelanja.push(produkDipilih);
      }
      alert(`Berhasil memasukkan Bunga ${namaProduk} ke keranjang!`);
      console.log("Isi Keranjang Belanja Saat Ini:", keranjangBelanja);
    });
  });
