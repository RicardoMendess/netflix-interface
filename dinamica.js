var content = '';

    for(var i = 1; i <= 20; i++) {
      content += `<div><img src="./cards/${i}.jpg" alt="" /></div>`;
    }

    $('.slider').html(content);


    $('.slider').slick({
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