var content4 = '';

    for(var i = 1; i <= 20; i++) {
      content4 += `<div><img src="./card4/${i}.jpg" alt="" /></div>`;
    }

    $('.slider-four').html(content4);


    $('.slider-four').slick({
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