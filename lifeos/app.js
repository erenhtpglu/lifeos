// LIFEOS - İlk sürüm

// Bugünün tarihini göster
const todayElement = document.getElementById("today");

const today = new Date();

todayElement.textContent = today.toLocaleDateString("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

// Ana ekrandaki bilgilendirme mesajı
function showMessage(message) {
  const messageElement = document.getElementById("message");

  messageElement.textContent = message;
}

// LIFEOS açılış mesajı
console.log("LIFEOS başarıyla başlatıldı.");
