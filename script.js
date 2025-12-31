var waktu = new Date();
var jam = waktu.getHours();
var ucapan = "";

// Ucapan waktu
if (jam <= 9) {
    ucapan = "Selamat pagi warga";
} else if (jam <= 14) {
    ucapan = "Selamat siang warga";
} else if (jam <= 18) {
    ucapan = "Selamat sore warga";
} else {
    ucapan = "Selamat malam warga";
}

// Nama hari
var namaHari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
var hari = namaHari[waktu.getDay()];

// Nama bulan
var namaBulan = [
    "Januari","Februari","Maret","April","Mei","Juni",
    "Juli","Agustus","September","Oktober","November","Desember"
];
var bulan = namaBulan[waktu.getMonth()];

// Tanggal & tahun
var tanggal = waktu.getDate();
var tahun = waktu.getFullYear();

// Gabungkan semuanya
document.getElementById("waktu").innerHTML =
    ucapan + "<br>" +
    hari + ", " + tanggal + " " + bulan + " " + tahun;

