import { useState } from 'react';
import React from 'react';
import Slider from 'react-slick';
import ReactFlagsSelect from 'react-flags-select';
import { FaFacebook } from 'react-icons/fa'

export default function HeroSection() {

  const [selected, setSelected] = useState('TR');
  
  const phones = {
    TR: '+90',
    DE: '+49',
    US: '+1',
    FR: '+33',
    IT: '+7'
  }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 750,
        autoplaySpeed: 3500,
        arrows: false,
      };
    return (
        <div className='relative before:bg-gradient-to-r before:from-primary-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
        <Slider {...settings}>
          <div>
            <img className='object-cover w-full h-[500px]' src='https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg'></img>
          </div>
          <div>
            <img className='object-cover w-full h-[500px]' src='https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg'></img>
          </div>
        </Slider>
        <div className='container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20'>
          <div>
            <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg'></img>
            <h3 className='text-white text-3xl mt-4'>Dakikalar içinde <br /> kapınızda</h3>
          </div>
          <div>
            <div className='bg-white w-[400px] rounded-md p-4'>
                <h4 className='text-center text-primary-color text-lg font-semibold mb-4'>
                  Giriş yap veya kayıt ol
                </h4>
                <div className='grid gap-y-4'>
                <div className='flex gap-x-2'>
                  <ReactFlagsSelect
                    countries={Object.keys(phones)}
                    customLabels={phones}
                    onSelect={code => setSelected(code)}
                    selected={selected}
                    className='flag-select'
                  />
                  <label className='flex-1 relative'>
                    <input required className='peer h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-color outline-none text-sm pt-2' />
                    <span className='absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-color peer-valid:text-xs '>Telefon Numarası</span>
                  </label>
                </div>
                <button className='bg-secondary-color text-primary-color h-12 flex items-center justify-center rounded w-full text-sm font-semibold hover:bg-primary-color hover:text-secondary-color transition-all'>
                  Telefon numarası ile devam et
                </button>
                <hr className='h-[1px] bg-gray-300 my-2' />
                <button className='bg-blue-100 px-4 text-primary-color text-opacity-80 h-12 flex items-center rounded w-full text-sm font-semibold hover:text-opacity-100 transition-all'>
                  <FaFacebook size={18} />
                  <span className='mx-auto'>Facebook ile devam et</span>
                </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
}
