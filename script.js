const headerEl = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        headerEl.classList.add('header-scrolled');
    }
    else if (window.scrollY < 50)
    {
        headerEl.classList.remove('header-scrolled');
    }
});


window.onload = function() {
    var links = document.querySelectorAll('.link');

    links.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            this.classList.add('active');
        });

        link.addEventListener('mouseout', function() {
            this.classList.remove('active');
        });
    });
}
