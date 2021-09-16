import React from 'react'

export default function MobileApp() {
    return (
        <div className='h-80 container mx-auto bg-primary-color rounded-md bg-mobile-app mt-8 flex justify-between items-center' >
            <div className='p-14 flex flex-col gap-y-3'>
                <h3 className='text-3xl text-white font-semibold'>Getir'i İndirin!</h3>
                <p className='text-lg text-white'>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim</p>
                <nav className='flex mt-5 gap-x-2'>
                    <a href="#">
                        <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
                    </a>
                    <a href="#">
                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
                    </a>
                    <a href="#">
                        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
                    </a>
                </nav>
            </div>
            <picture className='pt-6'>
                <img src="https://getir.com/_next/static/images/marketPhoneLanding-7d3fce18f50665f1f31b7811833163c2.png" />
            </picture>
        </div>
    )
}
