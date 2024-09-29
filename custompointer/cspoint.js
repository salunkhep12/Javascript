const cursor = document.querySelector('.cursor');

// Track mouse movement and update cursor position
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Optionally: Add cursor animations on hover
const links = document.querySelectorAll('a, section');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });

    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});
