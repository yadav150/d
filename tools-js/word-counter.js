// Word Counter logic
const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const charNoSpaceCount = document.getElementById('charNoSpaceCount');
const sentenceCount = document.getElementById('sentenceCount');
const paragraphCount = document.getElementById('paragraphCount');
const clearBtn = document.getElementById('clearBtn');

function updateStats() {
  const text = textInput.value;
  
  // Words: match sequences of word characters (letters, numbers, underscore)
  const words = text.match(/\b\w+\b/g);
  const wordNum = words ? words.length : 0;
  wordCount.textContent = wordNum;

  // Characters (total)
  charCount.textContent = text.length;

  // Characters without spaces
  const noSpaces = text.replace(/\s/g, '');
  charNoSpaceCount.textContent = noSpaces.length;

  // Sentences: split by ., !, ? (ignore multiple spaces)
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  sentenceCount.textContent = sentences.length;

  // Paragraphs: split by newline, filter empty
  const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
  paragraphCount.textContent = paragraphs.length;
}

// Update on every input event
textInput.addEventListener('input', updateStats);

// Clear button
clearBtn.addEventListener('click', function() {
  textInput.value = '';
  updateStats();
  textInput.focus();
});

// Initial update on page load (if any default text exists)
updateStats();
