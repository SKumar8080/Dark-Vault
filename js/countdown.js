
let count = 5;
let countdownEl = document.getElementById('countdown');
let interval = setInterval(() => {
  count--;
  countdownEl.textContent = count;
  if (count <= 0) {
    clearInterval(interval);
    countdownEl.textContent = 'Vault Accessed!';
  }
}, 1000);
