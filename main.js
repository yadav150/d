const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = progress + '%';
  if (scrollTop < 10 || progress >= 99) {
    progressBar.classList.add('fade');
  } else {
    progressBar.classList.remove('fade');
  }
});

const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15, rootMargin: '0px 0px -20px 0px' });
fadeElements.forEach(el => observer.observe(el));

const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('mobileOverlay');
const closeBtn = document.getElementById('closeMenu');

function openMenu() {
  overlay.classList.add('open');
  hamburger.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMenuFn() {
  overlay.classList.remove('open');
  hamburger.classList.remove('active');
  document.body.style.overflow = '';
}
hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenuFn);
overlay.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenuFn);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenuFn();
});
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeMenuFn();
});
