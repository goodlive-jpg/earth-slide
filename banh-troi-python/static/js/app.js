let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentSlideEl = document.getElementById('currentSlide');
const totalSlidesEl = document.getElementById('totalSlides');
const progressBar = document.getElementById('progressBar');
const revealPoemBtn = document.getElementById('revealPoemBtn');

totalSlidesEl.textContent = totalSlides;

let poemStep = 0;

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    
    currentSlideEl.textContent = currentSlide + 1;
    progressBar.style.width = ((currentSlide + 1) / totalSlides) * 100 + '%';
    
    prevBtn.style.display = currentSlide === 0 ? 'none' : 'flex';
    nextBtn.style.display = currentSlide === totalSlides - 1 ? 'none' : 'flex';
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});

if (revealPoemBtn) {
    revealPoemBtn.addEventListener('click', () => {
        poemStep++;
        const line = document.querySelector(`.poem-line[data-line="${poemStep}"]`);
        if (line) {
            line.classList.add('active');
            if (poemStep >= 4) {
                revealPoemBtn.style.display = 'none';
            }
        }
    });
}

updateSlide();
