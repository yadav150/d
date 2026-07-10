// QR Generator logic
const qrInput = document.getElementById('qrInput');
const generateBtn = document.getElementById('generateBtn');
const qrContainer = document.getElementById('qrcode');
const downloadBtn = document.getElementById('downloadBtn');

let currentQR = null; // store reference to the QR code instance

// Function to generate QR
function generateQR(text) {
  // Clear previous QR
  qrContainer.innerHTML = '';

  if (!text.trim()) {
    qrContainer.innerHTML = '<div class="qr-placeholder">Please enter some text.</div>';
    downloadBtn.disabled = true;
    currentQR = null;
    return;
  }

  // Create new QR code (size 200x200)
  currentQR = new QRCode(qrContainer, {
    text: text,
    width: 200,
    height: 200,
    colorDark: '#1e1e1e',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H // High error correction
  });

  downloadBtn.disabled = false;
}

// Generate on button click
generateBtn.addEventListener('click', () => {
  generateQR(qrInput.value);
});

// Generate on Enter key in input
qrInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    generateQR(qrInput.value);
  }
});

// ===== DOWNLOAD QR as PNG =====
downloadBtn.addEventListener('click', () => {
  const canvas = qrContainer.querySelector('canvas');
  if (!canvas) {
    alert('Please generate a QR code first.');
    return;
  }

  // Create download link
  const link = document.createElement('a');
  link.download = `qr-code-${Date.now()}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
});

// Generate initial QR on page load (with default text)
window.addEventListener('load', () => {
  generateQR(qrInput.value);
});
