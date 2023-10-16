function GanjilGenap() {
  let angka = prompt("Masukkan Bilangan : ");

  if (angka % 2 == 0) {
    alert(angka + " " + "Angka Bilangan Genap");
  } else {
    alert(angka + " " + "Adalah Bilangan Ganjil");
  }
}

const tombol = document.getElementById("Masuk");
tombol.addEventListener("click", GanjilGenap);
