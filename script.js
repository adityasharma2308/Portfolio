document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    
    document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #0d253f, #0b1b34 70%)`;
});
document.addEventListener("DOMContentLoaded", function() {
    const words = ["Developer", "Entrepreneur", "Creator"];
    let wordIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150; // typing speed in milliseconds
    const erasingSpeed = 100; // erasing speed in milliseconds
    const newWordDelay = 2000; // delay before typing the next word
    const typingTextSpan = document.querySelector(".typing-text");

    function type() {
        if (charIndex < words[wordIndex].length) {
            typingTextSpan.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newWordDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            wordIndex++;
            if (wordIndex >= words.length) wordIndex = 0;
            setTimeout(type, typingSpeed);
        }
    }

    setTimeout(type, newWordDelay);
});
