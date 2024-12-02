// Play music
const music = document.getElementById('birthdayMusic'); // Pastikan ID audio benar
music.volume = 0.5;

// Cek apakah musik sudah diputar
const surpriseButton = document.getElementById('surpriseButton');
const surpriseSection = document.querySelector('.surprise-section');
const fireworks = document.querySelector('.fireworks');

// Fungsi untuk memutar musik
function playMusic() {
    if (music.paused) {
        music.play()
            .then(() => {
                console.log('Musik berhasil diputar');
            })
            .catch((error) => {
                console.error('Gagal memutar musik:', error);
                alert('Klik tombol lagi jika musik tidak berputar!');
            });
    }
}

// Event listener untuk tombol surprise
surpriseButton.addEventListener('click', () => {
    // Tampilkan surprise
    surpriseSection.style.display = 'block';
    fireworks.style.display = 'block';
    
    // Putar musik jika belum diputar
    playMusic();
});

// Tombol Mulai untuk memutar musik dan menampilkan efek hati
document.getElementById('mulai-btn').addEventListener('click', () => {
    createLoveEffect();  // Menampilkan animasi hati
    playMusic();  // Memutar musik
    createLoveEffect();  // Menampilkan efek emoticon love kecil-kecil
});

// Fungsi untuk membuat efek emoticon love kecil-kecil
function createLoveEffect() {
    for (let i = 0; i < 30; i++) { // Menambahkan 30 emotikon hati
        const love = document.createElement('div');
        love.classList.add('love');
        love.textContent = '❤️';
        
        // Set posisi acak
        love.style.left = `${Math.random() * window.innerWidth}px`;
        love.style.top = `${Math.random() * window.innerHeight}px`;

        // Tambahkan ke body
        document.body.appendChild(love);

        // Hapus emotikon setelah animasi selesai
        setTimeout(() => {
            love.remove();
        }, 2000); // Durasi animasi 2 detik
    }
}

// Kartu Tarot
const cards = document.querySelectorAll('.tarot-card');
const messages = [
    "Rachel, aku sudah lama ingin mengatakan ini... maukah kamu menjadi pacarku?",
    "Cinta datang di waktu yang tepat, mungkin sekarang saatnya?",
    "Rachel, aku harap kita bisa bersama, apakah kamu merasa hal yang sama?",
    "Aku sudah jatuh cinta padamu, Rachel. Bagaimana denganmu?",
    "Mungkin kita bisa mencoba hal baru bersama, Rachel.",
    "Rachel, hatiku selalu untukmu. Bagaimana jika kita memberi kesempatan pada cinta?"
];

// Menambahkan pesan ke kartu
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        card.innerHTML = `<h3 class="text-2xl font-bold text-white">${messages[index]}</h3>`;
        gsap.from(card, { duration: 1, scale: 0, ease: 'bounce' });
    });
});

// Fungsi untuk menampilkan pop-up
document.getElementById('yes-btn').addEventListener('click', () => {
    // Tampilkan pop-up
    document.getElementById('popup').classList.remove('hidden');
});

document.getElementById('no-btn').addEventListener('click', () => {
    // Tampilkan pop-up
    document.getElementById('popup').classList.remove('hidden');
});

// Tombol "Ya, aku terima" pada pop-up
document.getElementById('accept-btn').addEventListener('click', () => {
    const message = "Halo Rachel, saya ingin tahu jawabannya!";
    const phoneNumber = "+6282277717787"; // Ganti dengan nomor WhatsApp Anda
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Mengarahkan pengguna ke WhatsApp
    window.open(whatsappURL, "_blank");
    
    // Sembunyikan pop-up setelah pilihan
    document.getElementById('popup').classList.add('hidden');
});

// Tombol "Maaf, saya tidak mau" pada pop-up
document.getElementById('decline-btn').addEventListener('click', () => {
    alert("Baiklah Rachel, semoga kita bisa ngobrol lagi nanti!");
    
    // Sembunyikan pop-up setelah pilihan
    document.getElementById('popup').classList.add('hidden');
});

// Menyembunyikan tombol pertama dan menampilkan tombol kedua (akan muncul setelah klik "Mulai")
document.getElementById('mulai-btn').addEventListener('click', () => {
    // Menyembunyikan tombol pertama
    document.getElementById('mulai-btn').style.display = 'none';
    
    // Menampilkan tombol kedua
    const yesButton = document.getElementById('yes-btn');
    yesButton.style.display = 'inline-block';
    
    // Tambahkan efek atau perubahan lainnya jika diinginkan
    alert("Tombol kedua sekarang tersedia!");
});
