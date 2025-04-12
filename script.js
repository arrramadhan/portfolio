document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const pages = document.querySelectorAll(".page");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("data-page");
            const current = document.querySelector(".page.active");
            const next = document.getElementById(targetId);

            // Jika halaman yang sama diklik, tidak perlu melakukan perubahan
            if (current === next) return;

            // Menghapus class 'active' dari halaman yang sedang aktif
            current.classList.remove("active");
            current.style.opacity = 0; // Mengatur opacity halaman keluar menjadi 0

            setTimeout(() => {
                // Menyembunyikan semua halaman
                pages.forEach(page => page.style.display = "none");
                
                // Menampilkan halaman tujuan
                next.style.display = "block";

                setTimeout(() => {
                    // Menambahkan class 'active' dan mengembalikan opacity halaman baru menjadi 1
                    next.classList.add("active");
                    next.style.opacity = 1;
                }, 10); // Sedikit delay sebelum halaman baru aktif
            }, 300); // Memberikan sedikit waktu untuk transisi keluar halaman sebelumnya
        });
    });
});
