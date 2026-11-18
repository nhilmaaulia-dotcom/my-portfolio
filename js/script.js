
// =====================================
// MY PORTFOLIO - NENG HILMA AULIA
// JAVASCRIPT
// =====================================


// 1. MENU NAVIGASI MOBILE

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // Menutup menu setelah memilih halaman

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}


// 2. TAHUN OTOMATIS PADA FOOTER

document.querySelectorAll(".year").forEach(function (element) {

    element.textContent = new Date().getFullYear();

});


// 3. FORMULIR CONTACT

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const subject = document.getElementById("subject").value.trim();

        const message = document.getElementById("message").value.trim();


        // Memeriksa apakah semua kolom sudah diisi

        if (!name || !email || !subject || !message) {

            alert("Semua kolom harus diisi!");

            return;

        }


        // Email tujuan

        const destination = "nhilmaaulia@gmail.com";


        // Isi pesan email

        const body =
            "Nama: " + name + "\n" +
            "Email: " + email + "\n\n" +
            "Pesan:\n" + message;


        // Membuat link email

        const mailto =
            "mailto:" + destination +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);


        // Membuka aplikasi email

        window.location.href = mailto;


        // Mengosongkan formulir

        contactForm.reset();

    });

}
