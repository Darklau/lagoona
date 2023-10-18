import placementCard1 from '../assets/images/placementCard-1.png'
import placementCard2 from '../assets/images/placementCard-2.png'
import placementCard3 from '../assets/images/placementCard-3.png'
import placementCard4 from '../assets/images/placementCard-4.png'
import placementCard5 from '../assets/images/placementCard-5.png'
import placementCard6 from '../assets/images/placementCard-6.png'
import placementCard7 from '../assets/images/placementCard-7.png'
import placementCard8 from '../assets/images/placementCard-8.png'
import placementCard9 from '../assets/images/placementCard-9.png'


export const Placement = () => {
    const placingCards = [
        {price: '4 698 ₽',
        title: 'Lagoona española',
        location: 'Барселона, Испания',
        starRating: 4,
        src: placementCard1},
        {price: '5 148 ₽',
            title: 'Lagoona son típicas',
            location: 'Барселона, Испания',
            starRating: 4,src: placementCard2
        },
        {price: '6 254 ₽',
            title: 'Lagoona de la guerra',
            location: 'Барселона, Испания',
            starRating: 4,
            src: placementCard3},
        {price: '6 320 ₽',
            title: 'Lagoona mentira piadosa',
            location: 'Барселона, Испания',
            starRating: 4,
            src: placementCard4},
        {price: '6 457 ₽',
            title: 'Lagoona empujar la creatividad',
            location: 'Барселона, Испания',
            starRating: 4,
            src: placementCard5},
        {price: '6 320 ₽',
            title: 'Lagoona el retorno',
            location: 'Барселона, Испания',
            starRating: 4,
            src: placementCard6},
        {price: '6 505 ₽',
            title: 'Lagoona mentira piadosa',
            location: 'Барселона, Испания',
            starRating: 4,
            src: placementCard7},
        {price: '6 824 ₽',
            title: 'Lagoona suerte siguió siempre',
            location: 'Барселона, Испания',
            starRating: 4,
            src: placementCard8},
    ]

    return (<section id='placement'>
        <h3 className='section_title'>
            Размещение
        </h3>
        <ul className='grid grid-cols-3 gap-[24px]'>
            {placingCards.map((card, index) => (
                <li className='card flex flex-col p-0'>
                    <img className='w-full' alt={card.title + ' image'} src={card.src}/>
                    <div className=' p-[32px_45px_45px] flex flex-col  items-start'>
                        <div className='flex mb-[16px] items-center w-full justify-between'>
                            <div className='flex items-end'><span className='text-grayMain mr-[4px]'>от</span>
                            <span className='text-20 font-bold mr-[4px]'>{card.price}</span>
                            <span className='text-16'>/ ночь</span></div>
                            <ul className={'flex gap-x-[6px]'}>
                                {Array.from(Array(card.starRating).keys()).map((_, index) => (
                                    <li key={index}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <g clipPath="url(#clip0_370726_229)">
                                                <path d="M13.6962 6.37211C13.9717 6.10355 14.069 5.7094 13.9501 5.343C13.831 4.9766 13.5207 4.71504 13.1394 4.65954L9.74958 4.16699C9.60521 4.14596 9.48046 4.05541 9.41598 3.9245L7.90048 0.853131C7.73032 0.508036 7.38494 0.293579 7.00004 0.293579C6.61542 0.293579 6.27004 0.508036 6.09988 0.853131L4.5841 3.92478C4.51962 4.05569 4.39459 4.14624 4.25022 4.16727L0.860391 4.65982C0.479414 4.71504 0.168802 4.97688 0.0496586 5.34328C-0.069204 5.70968 0.0280727 6.10383 0.303643 6.37239L2.75631 8.7631C2.86087 8.86514 2.90881 9.01204 2.88414 9.15557L2.30553 12.5314C2.25422 12.8285 2.33216 13.1176 2.52447 13.3455C2.82331 13.7007 3.34501 13.8089 3.76215 13.5897L6.79371 11.9957C6.92042 11.9292 7.07993 11.9298 7.20637 11.9957L10.2382 13.5897C10.3857 13.6673 10.5429 13.7066 10.7052 13.7066C11.0016 13.7066 11.2825 13.5748 11.4756 13.3455C11.6682 13.1176 11.7459 12.828 11.6946 12.5314L11.1157 9.15557C11.091 9.01176 11.1389 8.86514 11.2435 8.7631L13.6962 6.37211Z" fill="#F0BF5F"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_370726_229">
                                                    <rect width="14" height="14" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </li>
                                ))}
                                {Array.from(Array(5 - card.starRating).keys()).map((_, index) => (
                                    <li key={index}>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_370726_237)">
                                                <path d="M13.6962 6.37211C13.9717 6.10355 14.069 5.7094 13.9501 5.343C13.831 4.9766 13.5207 4.71504 13.1394 4.65954L9.74958 4.16699C9.60521 4.14596 9.48046 4.05541 9.41598 3.9245L7.90048 0.853131C7.73032 0.508036 7.38494 0.293579 7.00004 0.293579C6.61542 0.293579 6.27004 0.508036 6.09988 0.853131L4.5841 3.92478C4.51962 4.05569 4.39459 4.14624 4.25022 4.16727L0.860391 4.65982C0.479414 4.71504 0.168802 4.97688 0.0496586 5.34328C-0.069204 5.70968 0.0280727 6.10383 0.303643 6.37239L2.75631 8.7631C2.86087 8.86514 2.90881 9.01204 2.88414 9.15557L2.30553 12.5314C2.25422 12.8285 2.33216 13.1176 2.52447 13.3455C2.82331 13.7007 3.34501 13.8089 3.76215 13.5897L6.79371 11.9957C6.92042 11.9292 7.07993 11.9298 7.20637 11.9957L10.2382 13.5897C10.3857 13.6673 10.5429 13.7066 10.7052 13.7066C11.0016 13.7066 11.2825 13.5748 11.4756 13.3455C11.6682 13.1176 11.7459 12.828 11.6946 12.5314L11.1157 9.15557C11.091 9.01176 11.1389 8.86514 11.2435 8.7631L13.6962 6.37211Z" fill="#E9E9E9"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_370726_237">
                                                    <rect width="14" height="14" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </li>
                                        ))}
                            </ul>

                        </div>
                        <span className='block mb-[16px]'>{card.title}</span>
                        <span className={'block mb-[20px] text-grayMain'}>{card.location}</span>
                        <button className='button'>Номера</button>
                    </div>

                </li>
            ))}
            <li>
                <a style={{backgroundImage: `url('${placementCard9}')`}} className='text-20 text-white h-full bg-cover pb-[27px] card flex items-end justify-center' href="#">Посмотреть все варианты</a>
            </li>

        </ul>
    </section>)
}
