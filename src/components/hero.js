import cardOne from '../assets/images/offersCard-1.png'
import cardTwo from '../assets/images/offersCard-2.png'
import cardThree from '../assets/images/offersCard-3.jpg'


export const Hero = () =>
{
    return (
        <section id={'offers'} className='flex flex-col mb-[70px]'>
            <h2 className='section_title'>Спецпредложения</h2>
            <ul className='flex gap-[24px]'>
                <div className='w-[573px] gap-y-[24px]   flex justify-between flex-col'>
                    <li style={{backgroundImage: `url(${cardOne})`}} className='overflow-hidden card p-0 bg-no-repeat' >
                        <div className='from-bgGradient  bg-cover  bg-no-repeat px-[45px] bg-gradient-to-r flex justify-between flex-col min-h-[258px]  py-[40px]'>
                            <div className='text-white'>
                                <h3 className='text-40 mb-[15px] max-w-[420px] font-bold'>
                                    Мальдивские острова
                                </h3>
                                <span className='text-20'>от 55 000 ₽</span>
                            </div>
                            <a className='link text-yellowPale flex gap-x-[6px] items-center' href='#'>
                                <span>Подробнее</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                                    <path d="M1.49998 1.00002L9.27815 8.7782L1.49998 16.5564" stroke="#F0BF5F" stroke-width="2"/>
                                </svg>
                            </a>
                        </div>



                    </li>
                    <li style={{backgroundImage: `url(${cardTwo})`}} className='overflow-hidden card p-0 bg-no-repeat' >
                        <div className='from-bgGradient  bg-cover  bg-no-repeat px-[45px] bg-gradient-to-r flex justify-between flex-col min-h-[258px]  py-[40px]'>
                            <div className='text-white'>
                                <h3 className='text-40 mb-[15px] max-w-[420px] font-bold'>
                                    Горящий тур на остров Крит
                                </h3>
                                <span className='text-20'>от 30 000 ₽</span>
                            </div>
                            <a className='link text-yellowPale flex gap-x-[6px] items-center' href='#'>
                                <span>Подробнее</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                                    <path d="M1.49998 1.00002L9.27815 8.7782L1.49998 16.5564" stroke="#F0BF5F" stroke-width="2"/>
                                </svg>
                            </a>
                        </div>



                    </li>

                </div>
                <li style={{backgroundImage: `url(${cardThree})`}} className='w-[573px] overflow-hidden card p-0 bg-contain bg-no-repeat' >
                    <div className='h-full bg-cover  bg-no-repeat px-[45px] bg-gradient-to-r flex justify-between flex-col min-h-[258px] pt-[212px]  py-[40px]'>
                        <div className='text-white'>
                            <h3 className='text-60 mb-[15px] max-w-[420px] font-bold'>
                                Номера категории люкс
                            </h3>
                            <span className='text-30'>от 5 000 ₽</span>
                        </div>
                        <a className='link text-yellowPale flex gap-x-[6px] items-center' href='#'>
                            <span>Подробнее</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                                <path d="M1.49998 1.00002L9.27815 8.7782L1.49998 16.5564" stroke="#F0BF5F" stroke-width="2"/>
                            </svg>
                        </a>
                    </div>



                </li>

            </ul>
        </section>
    )
}