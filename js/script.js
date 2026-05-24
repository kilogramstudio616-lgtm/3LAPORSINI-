// ====================================
// KODE INTERAKTIF LAPOR SINI
// Fitur Utama: Menu Tetap & Konfirmasi
// ====================================

// ✅ FUNGSI 1: PERINTAH KONFIRMASI KIRIM LAPORAN
function konfirmasiKirim() {
    return confirm("Apakah Anda yakin akan mengirim laporan ini?");
}

// ✅ FUNGSI 2: MENU TETAP BERUBAH SAAT DIGULIR
window.addEventListener('scroll', function(){
    const menuAtas = document.querySelector('.navbar');
    if(window.scrollY > 50){
        menuAtas.classList.add('gulir');
    }else{
        menuAtas.classList.remove('gulir');
    }
});

// ✅ FUNGSI 3: GULIRAN HALAMAN HALUS
document.addEventListener('DOMContentLoaded', function() {
    const tautan = document.querySelectorAll('a[href^="#"]');
    tautan.forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            const tujuan = document.querySelector(this.getAttribute('href'));
            tujuan.scrollIntoView({behavior: 'smooth'});
        });
    });
});

// ✅ FUNGSI 4: FITUR LAPOR RAHASIA (Untuk Halaman Formulir)
function sembunyiNama(){
    let kolomNama = document.getElementById('nama');
    let tombolRahasia = document.getElementById('rahasia');

    if(tombolRahasia.checked){
        kolomNama.value = "RAHASIA";
        kolomNama.readOnly = true;
        kolomNama.classList.add('bg-light');
    }else{
        kolomNama.value = "";
        kolomNama.readOnly = false;
        kolomNama.classList.remove('bg-light');
    }
}



