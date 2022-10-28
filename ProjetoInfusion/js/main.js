(function(){
    var $body = document.querySelector('body');
        $body.classList.remove('no-js')
        $body.classList.add('js')

        var menu = new Menu({
            container: '.header__nav',
            toggleBtn: '.header__btnMenu',
            widthEnabled: 1025
        })

        var corouselImgs = new Carousel({
            container: '.laptop-slider .slideshow',
            itens: 'figure',
            btnPrev: '.prev',
            btnNext: '.next'
        })

        var corouselImgs = new Carousel({
            container: '.quote-slideshow',
            itens: 'figure',
            btnPrev: '.prev',
            btnNext: '.next'
        })
})()