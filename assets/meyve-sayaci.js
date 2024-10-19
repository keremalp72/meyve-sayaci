let meyveler = [];

let meyveSayisi = Number(prompt("Eklemek isteğiniz meyve sayısını girin:"));

let meyveİsimleri;

function meyveEkle() {
  for (let i = 0; i < meyveSayisi; i++) {

    meyveİsimleri = prompt("Eklemek isteğiniz ismi girin:");

    meyveler.push(meyveİsimleri);
  }

  console.log(`eklenen meyveler: ${meyveler}`);
}
meyveEkle();
