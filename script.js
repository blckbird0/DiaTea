// === Affiliate Link ===
const AFFILIATE_URL = "https://hr.diatea.cc/azcuxQGHCR/alU8IR13cHzTZs9/?al=72968&ap=-1&esub=-7EBRQCgQAAAfGpAQDz3IDSnY3CB0B0AYAAw8gG0xpEQ0aEQ0aEQ1CEQ1aA0JSA3Vzf2FkY29tYm__eTJhSklMR1EAA2Q1&site_option=0&target=-7EBNQCgQAAAfGpAQDz3IABQEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx";

// === CTA Button Redirect ===
function goToAffiliate() {
  window.open(AFFILIATE_URL, "_blank");
}

// === Countdown Timer ===
function startCountdown(durationMinutes) {
  let timer = durationMinutes * 60; // convert minutes to seconds
  const display = document.getElementById("timer");

  setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    display.textContent =
      `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    if (timer > 0) {
      timer--;
    } else {
      display.textContent = "Expired";
    }
  }, 1000);
}

// Start countdown at 15 minutes
startCountdown(15);