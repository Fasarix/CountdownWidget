// Imposta qui la data di destinazione del tuo countdown
const targetDate = new Date("2025-02-25T23:59:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  // Se la data target è già passata o coincide con l'ora attuale
  if (diff <= 0) {
    document.getElementById("days").textContent = 0;
    document.getElementById("hours").textContent = 0;
    document.getElementById("minutes").textContent = 0;
    document.getElementById("seconds").textContent = 0;
    return;
  }

  // Calcola giorni, ore, minuti, secondi
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Aggiorna il DOM
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Aggiorna subito il countdown...
updateCountdown();
// ...e poi ogni secondo
setInterval(updateCountdown, 1000);
