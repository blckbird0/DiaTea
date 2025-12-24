// === Affiliate Link ===
const AFFILIATE_URL = "https://uh8f8d208auh.axdsz.pro/?rid=-7EBNQCgQAAHA0XAYABgEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx";

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
