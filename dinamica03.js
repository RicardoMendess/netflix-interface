var content3 = '';

    for(var i = 1; i <= 20; i++) {
      content3 += `<div><img src="./card3/${i}.jpg" alt="" /></div>`;
    }

    $('.slider-three').html(content3);


    $('.slider-three').slick({
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