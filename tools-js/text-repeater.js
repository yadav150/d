// Text Repeater logic
const textInput = document.getElementById('textInput');
const repeatCount = document.getElementById('repeatCount');
const generateBtn = document.getElementById('generateBtn');
const resultOutput = document.getElementById('resultOutput');
const copyResultBtn = document.getElementById('copyResultBtn');
const clearResultBtn = document.getElementById('clearResultBtn');
const charInfo = document.getElementById('charInfo');

function generateRepeatedText() {
  const text = textInput.value;
  let count = parseInt(repeatCount.value, 10);

  // Validate count
  if (isNaN(count) || count < 1) {
    count = 1;
    repeatCount.value = 1;
  }
  if (count > 5000) {
    count = 5000;
    repeatCount.value = 5000;
    alert('Maximum repeat count is 5000 to prevent performance issues.');
  }

  if (!text.trim()) {
    resultOutput.value = '';
    charInfo.innerHTML = 'Total characters: <strong>0</strong>';
    return;
  }

  // Generate repeated text
  const repeated = text.repeat(count);
  resultOutput.value = repeated;
  charInfo.innerHTML = `Total characters: <strong>${repeated.length.toLocaleString()}</strong>`;
}

// Generate on button click
generateBtn.addEventListener('click', generateRepeatedText);

// Generate on Enter key in text input or number input
textInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    generateRepeatedText();
  }
});
repeatCount.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    generateRepeatedText();
  }
});

// Copy result
copyResultBtn.addEventListener('click', function() {
  const text = resultOutput.value;
  if (!text) {
    alert('Nothing to copy. Please generate repeated text first.');
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    copyResultBtn.textContent = 'Copied!';
    copyResultBtn.classList.add('copied');
    setTimeout(() => {
      copyResultBtn.textContent = 'Copy Result';
      copyResultBtn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    // Fallback for older browsers
    resultOutput.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
  });
});

// Clear result and input
clearResultBtn.addEventListener('click', function() {
  resultOutput.value = '';
  charInfo.innerHTML = 'Total characters: <strong>0</strong>';
  textInput.value = '';
  textInput.focus();
});

// Auto-generate on page load with default values (optional)
window.addEventListener('load', generateRepeatedText);
