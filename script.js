// PIN Konfigurasi (1110)
const TARGET_PIN = "1110";
let inputPin = "";

// Handle PIN Input
function appendPin(number) {
    if (inputPin.length < 4) {
        inputPin += number;
        renderDots();
    }
    if (inputPin.length === 4) {
        setTimeout(checkPin, 200);
    }
}

function clearPin() {
    inputPin = "";
    renderDots();
}

function deletePin() {
    inputPin = inputPin.slice(0, -1);
    renderDots();
}

function renderDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index < inputPin.length) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });
}

function checkPin() {
    if (inputPin === TARGET_PIN) {
        switchScreen('screen-passcode', 'screen-gift');
    } else {
        alert("PIN Salah! Coba ingat-ingat lagi yaa.");
        clearPin();
    }
}

function switchScreen(fromId, toId) {
    document.getElementById(fromId).classList.remove('active');
    setTimeout(() => {
        document.getElementById(fromId).style.display = 'none';
        const nextScreen = document.getElementById(toId);
        nextScreen.style.display = 'flex';
        setTimeout(() => nextScreen.classList.add('active'), 50);
    }, 400);
}

// Handle Unboxing Gift
function openGift() {
    document.getElementById('gift-loading-text').style.display = 'block';
    
    // Memutar musik otomatis saat kado dibuka
    const music = document.getElementById('bg-music');
    if (music) { 
        music.play(); 
    }

    setTimeout(() => {
        switchScreen('screen-gift', 'screen-main');
    }, 1200);
}

}

// Digital Bouquet Toast
function showFlowerMsg(text) {
    const toast = document.getElementById('flower-toast');
    toast.innerText = text;
}

// Polaroid Modal Zoom
function openModal(imgSrc, captionText) {
    const modal = document.getElementById('image-modal');
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal-caption').innerText = captionText;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('image-modal').style.display = 'none';
}

// Music Player Logic
const songs = [
    { title: "Shape Of My Heart", artist: "Backstreet Boys" },
    { title: "Angel Baby", artist: "Troye Sivan" },
    { title: "My Love", artist: "Westlife" }
];
let currentSongIdx = 0;
let isPlaying = true;

function updatePlayerUI() {
    document.getElementById('song-title').innerText = songs[currentSongIdx].title;
    document.getElementById('song-artist').innerText = songs[currentSongIdx].artist;
    
    const items = document.querySelectorAll('.song-item');
    items.forEach((item, idx) => {
        if (idx === currentSongIdx) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function togglePlay() {
    isPlaying = !isPlaying;
    const btn = document.getElementById('play-btn');
    const albumArt = document.getElementById('album-art');
    
    if (isPlaying) {
        btn.innerText = "⏸";
        albumArt.classList.add('spinning');
    } else {
        btn.innerText = "▶";
        albumArt.classList.remove('spinning');
    }
}

function prevSong() {
    currentSongIdx = (currentSongIdx - 1 + songs.length) % songs.length;
    updatePlayerUI();
}

function nextSong() {
    currentSongIdx = (currentSongIdx + 1) % songs.length;
    updatePlayerUI();
}

function playSelectSong(index) {
    currentSongIdx = index;
    isPlaying = true;
    document.getElementById('play-btn').innerText = "⏸";
    document.getElementById('album-art').classList.add('spinning');
    updatePlayerUI();
}

// Jar of Reasons (Diubah khusus apresiasi & semangat LDKS)
const reasons = [
    "Ketahanan mental kamu pas LDKS bener-bener bikin aku kagum!",
    "Kamu terbukti bukan cewek manja, kamu cewek yang tangguh banget!",
    "Walau capek banget, kamu gak gampang ngeluh dan tetap berusaha.",
    "Aku bangga banget bisa jadi pacar dari cewek sehebat kamu.",
    "Senyum kamu setelah berhasil melewati masa sulit itu hal terindah!"
];

function shakeJar() {
    const jar = document.getElementById('jar-element');
    const popup = document.getElementById('note-popup');
    const noteText = document.getElementById('note-text');

    jar.classList.add('shake-anim');
    setTimeout(() => {
        jar.classList.remove('shake-anim');
        const randomMsg = reasons[Math.floor(Math.random() * reasons.length)];
        noteText.innerText = randomMsg;
        popup.style.display = 'block';
    }, 500);
}

// Birthday Modal Card
function openBirthdayModal() {
    document.getElementById('bday-modal').style.display = 'flex';
}

function closeBirthdayModal() {
    document.getElementById('bday-modal').style.display = 'none';
}

// Falling Flowers Animation Generator
function createFallingFlowers() {
    const container = document.getElementById('flower-container');
    const flowerTypes = ['🌸', '✨', '🌺', '🌼'];
    
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.className = 'falling-flower';
        flower.innerText = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = (Math.random() * 3 + 4) + 's';
        flower.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(flower);
    }
}

window.onload = () => {
    createFallingFlowers();
};
