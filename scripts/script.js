window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    // Altri elementi nascosti (es. scritte)
    const scritte = document.querySelectorAll('.scritta-nascosta');

    scritte.forEach(function(el) {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add('visibile');
        }
    });
});