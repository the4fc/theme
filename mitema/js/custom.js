document.addEventListener('DOMContentLoaded', function() {
  // Animaciones al cargar
  const elements = document.querySelectorAll('.animated');
  elements.forEach(element => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  });
});
