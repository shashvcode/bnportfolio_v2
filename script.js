document.addEventListener('DOMContentLoaded', function() {
  const title = document.getElementById('typing-title');
  if (title) {
    const text = "hi, i'm benjamin nashel";
    let i = 0;
    function type() {
      if (i <= text.length) {
        title.textContent = text.slice(0, i);
        i++;
        setTimeout(type, 80);
      } else {
        // No fade-in needed for fixed title
      }
    }
    title.textContent = '';
    setTimeout(type, 400);
  } else {
    // For other pages, fade in content immediately
    const content = document.querySelector('.content');
    if (content) content.classList.add('fade-in');
  }

  // --- Cursor trail effect ---
  const DOTS = 7;
  const dots = [];
  for (let i = 0; i < DOTS; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);
    dots.push({ el: dot, x: 0, y: 0 });
  }
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  function animateDots() {
    let x = mouse.x, y = mouse.y;
    dots.forEach((dot, i) => {
      dot.x += (x - dot.x) * (0.12 - i * 0.01);
      dot.y += (y - dot.y) * (0.12 - i * 0.01);
      dot.el.style.transform = `translate3d(${dot.x - 5}px, ${dot.y - 5}px, 0)`;
      x = dot.x;
      y = dot.y;
    });
    requestAnimationFrame(animateDots);
  }
  animateDots();
});

// Add cursor-dot styles
const style = document.createElement('style');
style.textContent = `
.cursor-dot {
  position: fixed;
  top: 0; left: 0;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: #111;
  opacity: 0.7;
  pointer-events: none;
  z-index: 9999;
  transition: background 0.2s;
  will-change: transform;
}
`;
document.head.appendChild(style); 