const testimonials = [
    { text: "CrystalClear Real Estate made finding my new home so easy and stress-free!", author: "John Doe" },
    { text: "The team was incredibly helpful and responsive throughout the entire process.", author: "Jane Smith" },
    { text: "I found the perfect apartment in no time, thanks to CrystalClear Real Estate.", author: "Michael Brown" },
    { text: "Excellent service! They helped me secure my dream home with ease.", author: "Sarah Williams" },
    { text: "CrystalClear Real Estate offers the best deals in the city! Highly recommended.", author: "David Johnson" },
    { text: "Very professional and reliable. The whole process was smooth and efficient.", author: "Emma Clarke" }
];

document.addEventListener("DOMContentLoaded", () => {
    const slideContainer = document.querySelector('.testimonial-slideshow-container');
    const dotContainer = document.querySelector('div[style*="text-align:center"]');

    slideContainer.innerHTML = '';
    dotContainer.innerHTML = '';

    testimonials.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = 'testimonial-slide fade';
        slide.innerHTML = `<p>"${item.text}"</p><h3>- ${item.author}</h3>`;
        slideContainer.appendChild(slide);

        const dot = document.createElement('button');
        dot.className = 'testimonial-dot';
        dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
        dot.addEventListener('click', () => currentTestimonialSlide(index + 1));
        dotContainer.appendChild(dot);
    });

    const prevBtn = document.createElement('button');
    prevBtn.className = 'prev';
    prevBtn.setAttribute('aria-label', 'Previous testimonial');
    prevBtn.innerHTML = '&#10094;';
    prevBtn.onclick = () => plusTestimonialSlides(-1);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next';
    nextBtn.setAttribute('aria-label', 'Next testimonial');
    nextBtn.innerHTML = '&#10095;';
    nextBtn.onclick = () => plusTestimonialSlides(1);

    slideContainer.appendChild(prevBtn);
    slideContainer.appendChild(nextBtn);

    showTestimonialSlides(testimonialIndex);
});

let testimonialIndex = 1;

function plusTestimonialSlides(n) {
    showTestimonialSlides(testimonialIndex += n);
}

function currentTestimonialSlide(n) {
    showTestimonialSlides(testimonialIndex = n);
}

function showTestimonialSlides(n) {
    let i;
    const slides = document.getElementsByClassName("testimonial-slide");
    const dots = document.getElementsByClassName("testimonial-dot");
    if (n > slides.length) { testimonialIndex = 1 }
    if (n < 1) { testimonialIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[testimonialIndex - 1]) {
        slides[testimonialIndex - 1].style.display = "block";
        dots[testimonialIndex - 1].className += " active";
    }
}

// Dropdown Search Functionality
document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("search-button");
    const dropdown = document.getElementById("search-bar");

    if (searchBtn && dropdown) {
        searchBtn.addEventListener("click", () => {
            const value = dropdown.value;

            if (value === "camden") {
                window.location.href = "listings.html#camden";
            } else if (value === "soho") {
                window.location.href = "listings.html#soho";
            } else if (value === "central-london") {
                window.location.href = "listings.html#central-london";
            } else {
                alert("Please select a property.");
            }
        });
    }
});
