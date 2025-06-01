const light = document.querySelector('.cursor-light');

window.addEventListener('mousemove', (e) => {
  light.style.transform = `translate(${e.clientX - 75}px, ${e.clientY - 75}px)`;
});
