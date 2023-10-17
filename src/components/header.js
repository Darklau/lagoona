
import {ReactComponent as LagoonaTextLogo} from '../assets/icons/logo/lagoonaTextLogo.svg'
import {ReactComponent as LagoonaCropped} from '../assets/icons/logo/lagoonaCroppedLogo.svg'

export const Header = () => {
    const headerLinks = [
        {
            href: '#about',
            title: 'О нас',
        },
        {
            href: '#services',
            title: 'Услуги',
        },
        {
            href: '#advantages',
            title: 'Преимущества',
        },
        {
            href: '#placement',
            title: 'Размещение',

        },
        {
            href: '#blog',
            title: 'Блог',
        },
        {
            href: 'contacts',
            title: 'Контакты',
        }
    ]
    return (
        <header className='flex mb-[70px] flex-col'>
            <div className='flex mb-[30px]  justify-between items-center'>
                <div className=' flex items-center gap-x-[40px]'>
                    <a className='flex  text-yellowMain' href='/'>
                        <div className='w-[261px] bg-yellowLite rounded-radiusMain relative py-[7px] px-[23px] flex'>
                            <LagoonaTextLogo/>
                            <LagoonaCropped className='absolute right-0 top-0'/>
                        </div>
                    </a>
                <a className='text-20' href='tel:74953225448'>
                    +7 495 322-54-48
                </a>
                </div>
                <a className='link items-center flex' href='#'>
                    {/*link arrow*/}
                    <svg className='mr-[3px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.59 7.41L15.17 11H1V13H15.17L11.58 16.59L13 18L19 12L13 6L11.59 7.41ZM20 6V18H22V6H20Z" fill="#CC9933"/>
                    </svg>
                    <span>В личный кабинет</span>

                </a>
            </div>
        <nav className='card py-[14px] flex items-center justify-between'>
            <ul className='flex-grow justify-between flex max-w-[648px]'>
                {headerLinks.map((link) => (
                    <li>
                        <a href={link.href}>{link.title}</a>
                    </li>
                ))}

            </ul>
            <div className='flex gap-x-[40px]'>
                <button className='button'>
                    Хочу тур
                </button>
                <button className='button'>
                    Заказать звонок
                </button>
            </div>
        </nav>
        </header>
    )
}