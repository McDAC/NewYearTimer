function countDown() {
    const now = new Date();
    const targetTime = new Date(`January 1, ${now.getFullYear() + 1} 00:00:00`);

    const diff = targetTime - now;

    const d = Math.floor(diff / (24 * 60 * 60 * 1000));
    const h = Math.floor(diff / (60 * 60 * 1000)) % 24;
    const m = Math.floor(diff / (60 * 1000)) % 60;
    const s = Math.floor(diff / 1000) % 60;

    document.getElementById('days').innerHTML = d.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = h.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = m.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = s.toString().padStart(2, '0');
}

// Запускаем сразу и затем каждую секунду
countDown();
setInterval(countDown, 1000);
