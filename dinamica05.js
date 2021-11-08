var content5 = '';

    for(var i = 1; i <= 20; i++) {
      content5 += `<div><img src="./card5/${i}.jpg" alt="" /></div>`;
    }

    $('.slider-five').html(content5);


    $('.slider-five').slick({
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