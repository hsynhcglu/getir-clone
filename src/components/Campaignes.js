import { useState, useEffect } from 'react';
import React from 'react'
import Slider from 'react-slick';
import Banners from 'api/banners.json'
import Title from 'ui/Title';

export default function Campaignes() {

    const [banners, setBanners] = useState([]);

    useEffect(() => {
		setBanners(Banners);
	}, [])

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 750,
        autoplaySpeed: 3500,
        arrows: false,
      };

    return (
        <div className='container mx-auto mb-5'>
            <Title>Kampanyalar</Title>
            <Slider {...settings}>
                {banners && banners.map(banner => (
                    <div key={banner.id} className="px-2">
                        <img src={banner.image} className="w-full sm:rounded-lg" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
