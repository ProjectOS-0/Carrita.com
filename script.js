document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       DATA UNDANGAN
    ===================================================== */

    const namaPria = DATA_UNDANGAN.pria.nama;
    const namaWanita = DATA_UNDANGAN.wanita.nama;

    const orangTuaPria = DATA_UNDANGAN.pria.orangTua;
    const orangTuaWanita = DATA_UNDANGAN.wanita.orangTua;

    const tanggal = DATA_UNDANGAN.acara.tanggal;
    const jamAkad = DATA_UNDANGAN.acara.akad;
    const jamResepsi = DATA_UNDANGAN.acara.resepsi;

    const lokasi = DATA_UNDANGAN.acara.lokasi;
    const alamat = DATA_UNDANGAN.acara.alamat;

    const maps = DATA_UNDANGAN.maps;


    /* =====================================================
       NAMA PASANGAN
    ===================================================== */

    const namaPasangan =
        namaPria + " & " + namaWanita;


    /* =====================================================
       COVER
    ===================================================== */

    document.getElementById("nama-pasangan").textContent =
        namaPasangan;

    document.getElementById("tanggal-acara").textContent =
        tanggal;


    /* =====================================================
       PEMBUKAAN
    ===================================================== */

    document.getElementById("nama-pasangan-isi").textContent =
        namaPasangan;


    /* =====================================================
       DATA MEMPELAI
    ===================================================== */

    document.getElementById("nama-pria").textContent =
        namaPria;

    document.getElementById("nama-wanita").textContent =
        namaWanita;

    document.getElementById("ortu-pria").textContent =
        orangTuaPria;

    document.getElementById("ortu-wanita").textContent =
        orangTuaWanita;


    /* =====================================================
       FOTO MEMPELAI
    ===================================================== */

    document.getElementById("foto-pria").src =
        DATA_UNDANGAN.pria.foto;

    document.getElementById("foto-wanita").src =
        DATA_UNDANGAN.wanita.foto;


    /* =====================================================
       COUNTDOWN
    ===================================================== */

    const targetDate =
        new Date(DATA_UNDANGAN.countdown).getTime();


    function updateCountdown() {

        const sekarang =
            new Date().getTime();

        const selisih =
            targetDate - sekarang;


        /* Jika waktu sudah lewat */

        if (selisih <= 0) {

            document.getElementById("countdown-hari").textContent = "00";

            document.getElementById("countdown-jam").textContent = "00";

            document.getElementById("countdown-menit").textContent = "00";

            document.getElementById("countdown-detik").textContent = "00";

            return;
        }


        /* Hitung waktu */

        const hari = Math.floor(
            selisih / (1000 * 60 * 60 * 24)
        );


        const jam = Math.floor(
            (selisih / (1000 * 60 * 60)) % 24
        );


        const menit = Math.floor(
            (selisih / (1000 * 60)) % 60
        );


        const detik = Math.floor(
            (selisih / 1000) % 60
        );


        /* Tampilkan countdown */

        document.getElementById("countdown-hari").textContent =
            String(hari).padStart(2, "0");

        document.getElementById("countdown-jam").textContent =
            String(jam).padStart(2, "0");

        document.getElementById("countdown-menit").textContent =
            String(menit).padStart(2, "0");

        document.getElementById("countdown-detik").textContent =
            String(detik).padStart(2, "0");
    }


    updateCountdown();

    setInterval(updateCountdown, 1000);


    /* =====================================================
       DETAIL ACARA
    ===================================================== */

    document.getElementById("tanggal-akad").textContent =
        tanggal;

    document.getElementById("jam-akad").textContent =
        jamAkad;


    document.getElementById("tanggal-resepsi").textContent =
        tanggal;

    document.getElementById("jam-resepsi").textContent =
        jamResepsi;


    document.getElementById("lokasi-acara").textContent =
        lokasi;

    document.getElementById("alamat-acara").textContent =
        alamat;


    /* =====================================================
       GOOGLE MAPS
    ===================================================== */

    document.getElementById("btn-maps").href =
        maps;


    /* =====================================================
       GALERI
    ===================================================== */

    const galeriContainer =
        document.getElementById("galeri-container");


    DATA_UNDANGAN.galeri.forEach(function (foto) {

        const item =
            document.createElement("div");

        item.className =
            "galeri-item";


        const img =
            document.createElement("img");

        img.src =
            foto;

        img.alt =
            "Foto Pernikahan";


        item.appendChild(img);

        galeriContainer.appendChild(item);

    });


    /* =====================================================
       PENUTUP
    ===================================================== */

    document.getElementById("nama-pasangan-penutup").textContent =
        namaPasangan;

/* =====================================================
   MUSIK
===================================================== */

const musik =
    document.getElementById("musik-undangan");

const btnMusik =
    document.getElementById("btn-musik");


musik.src =
    DATA_UNDANGAN.music;


let musikAktif = false;


function mulaiMusik() {

    musik.play()
        .then(function () {

            musikAktif = true;

            btnMusik.textContent = "🔊";

        })
        .catch(function () {

            musikAktif = false;

        });

}


btnMusik.addEventListener("click", function () {

    if (musikAktif) {

        musik.pause();

        musikAktif = false;

        btnMusik.textContent = "🔇";

    } else {

        mulaiMusik();

    }

});

    /* =====================================================
       TOMBOL BUKA UNDANGAN
    ===================================================== */

    document.getElementById("btn-buka").addEventListener(
        "click",
        function () {

            const cover =
                document.querySelector(".cover");

            const isiUndangan =
                document.getElementById("isi-undangan");


            /* Sembunyikan cover */

            cover.style.display =
                "none";


            /* Tampilkan isi */

            isiUndangan.style.display =
                "block";
            mulaiMusik();

            /* Kembali ke bagian paling atas */

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

});