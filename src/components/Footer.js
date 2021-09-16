import React from 'react'
import Menu from 'ui/Menu'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BiGlobe } from 'react-icons/bi'

export default function Footer() {
    const menus = [
        {
            title: 'Getir\'i keşfedin',
            items: [
                {
                    title: 'Hakkımızda'
                },
                {
                    title: 'Kariyer'
                },
                {
                    title: 'İletişim'
                },
                {
                    title: 'COVID-19 Duyuru'
                },
                {
                    title: 'Sosyal Sorumluluk Projeleri'
                }
            ]
        },
        {
            title: 'Yardıma mı ihtiyacınız var?',
            items: [
                {
                    title: 'Sıkça Sorulan Sorular'
                },
                {
                    title: 'Kişisel Verilerin Korunması'
                },
                {
                    title: 'Gizlilik Politikası'
                },
                {
                    title: 'Kullanım Koşulları'
                },
                {
                    title: 'Çerez Politikası'
                }
            ]
        },
        {
            title: 'İş Ortağımız Olun',
            items: [
                {
                    title: 'Bayimiz Olun'
                },
                {
                    title: 'Deponuzu Kiralayın'
                },
                {
                    title: 'GetirYemek Restoranı Olun'
                },
                {
                    title: 'GetirÇarşı İşletmesi Olun'
                }
            ]
        }
    ]

    return (
        <div className='container mx-auto pb-6'>
            <div className="grid grid-cols-4 pt-10">
                <section>
                    <nav className='grid gap-y-4'>
                        <h6 className='text-lg text-primary-color dark:text-secondary-color'>Getir'i İndirin</h6>
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
                </section>
                {menus.map((menu, index) => 
                    <Menu key={index} {...menu} />
                )}
            </div>
            <div className="flex justify-between items-center border-t border-gray-200 mt-8 pt-6">
                <div className='text-xs text-gray-700 flex gap-x-8 dark:text-gray-200'>
                    &copy; 2021 Getir
                    <a href="#" className='text-primary-color hover:underline relative before:w-[3px] before:h-[3px] before:bg-black before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:rounded-full dark:text-secondary-color dark:before:bg-gray-200'>Bilgi Toplumu Hizmetleri</a>
                </div>
                <nav className='flex gap-x-3'>
                    <a href="#" className='w-8 h-8 transition-colors rounded-lg text-gray-500 hover:bg-primary-color hover:bg-opacity-10 hover:text-primary-color flex items-center justify-center dark:text-gray-200 dark:hover:text-secondary-color'>
                        <FaFacebook size={18}/>
                    </a>
                    <a href="#" className='w-8 h-8 transition-colors rounded-lg text-gray-500 hover:bg-primary-color hover:bg-opacity-10 hover:text-primary-color flex items-center justify-center dark:text-gray-200 dark:hover:text-secondary-color'>
                        <FaTwitter size={18}/>
                    </a>
                    <a href="#" className='w-8 h-8 transition-colors rounded-lg text-gray-500 hover:bg-primary-color hover:bg-opacity-10 hover:text-primary-color flex items-center justify-center dark:text-gray-200 dark:hover:text-secondary-color'>
                        <FaInstagram size={18}/>
                    </a>
                    <a href="#" className='h-8 flex transition-colors items-center px-2 border border-gray-200 text-sm gap-x-2 rounded text-gray-500 hover:bg-primary-color hover:bg-opacity-10 hover:text-primary-color dark:text-gray-200 dark:hover:text-secondary-color'>
                        <BiGlobe size={18}/>
                        Türkçe (TR)
                    </a>
                </nav>
            </div>
        </div>
    )
}
