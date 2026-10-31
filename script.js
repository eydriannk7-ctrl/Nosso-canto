const startDate = new Date(2026, 9, 15, 0, 0, 0);

function addMonths(date, amount) {
    const result = new Date(date);
    const originalDay = result.getDate();

    result.setDate(1);
    result.setMonth(result.getMonth() + amount);

    const lastDay = new Date(
        result.getFullYear(),
        result.getMonth() + 1,
        0
    ).getDate();

    result.setDate(Math.min(originalDay, lastDay));

    return result;
}

function updateCounter() {
    const now = new Date();

    if (now < startDate) {
        document.querySelector('.counter-card h2').textContent =
            'Nossa história começa em breve ❤️';
        return;
    }

    let years = now.getFullYear() - startDate.getFullYear();

    let reference = new Date(startDate);
    reference.setFullYear(startDate.getFullYear() + years);

    if (reference > now) {
        years--;
        reference = new Date(startDate);
        reference.setFullYear(startDate.getFullYear() + years);
    }

    let months = 0;

    while (months < 11 && addMonths(reference, 1) <= now) {
        reference = addMonths(reference, 1);
        months++;
    }

    let remaining = now - reference;

    const days = Math.floor(remaining / 86400000);
    remaining %= 86400000;

    const hours = Math.floor(remaining / 3600000);
    remaining %= 3600000;

    const minutes = Math.floor(remaining / 60000);
    remaining %= 60000;

    const seconds = Math.floor(remaining / 1000);

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);

// Corações flutuando
const heartsContainer = document.getElementById('hearts');

function createHeart() {
    const heart = document.createElement('span');

    heart.className = 'heart';
    heart.textContent = '♥';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (12 + Math.random() * 18) + 'px';
    heart.style.animationDuration = (7 + Math.random() * 6) + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 13000);
}

setInterval(createHeart, 700);