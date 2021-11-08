var content2 = '';

    for(var i = 1; i <= 20; i++) {
      content2 += `<div><img src="./card2/${i}.jpg" alt="" /></div>`;
    }

    $('.slider-two').html(content2);


    $('.slider-two').slick({
        centerPadding: '60px',
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '20px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    });