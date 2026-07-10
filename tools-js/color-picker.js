// Color Picker logic
const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');
const hexValue = document.getElementById('hexValue');
const rgbValue = document.getElementById('rgbValue');
const copyHexBtn = document.getElementById('copyHexBtn');
const copyRgbBtn = document.getElementById('copyRgbBtn');

// Helper: convert HEX to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `rgb(${r}, ${g}, ${b})`;
}

// Update UI when color changes
function updateColor(hex) {
  colorDisplay.style.background = hex;
  hexValue.textContent = hex;
  rgbValue.textContent = hexToRgb(hex);
}

// Initial load
updateColor(colorPicker.value);

// On color picker change
colorPicker.addEventListener('input', (e) => {
  updateColor(e.target.value);
});

// Copy functions
function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✅ Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = btn === copyHexBtn ? '📋 Copy HEX' : '📋 Copy RGB';
      btn.classList.remove('copied');
    }, 1500);
  }).catch(() => {
    alert('Failed to copy. Please select and copy manually.');
  });
}

copyHexBtn.addEventListener('click', () => {
  const hex = hexValue.textContent;
  copyToClipboard(hex, copyHexBtn);
});

copyRgbBtn.addEventListener('click', () => {
  const rgb = rgbValue.textContent;
  copyToClipboard(rgb, copyRgbBtn);
});
