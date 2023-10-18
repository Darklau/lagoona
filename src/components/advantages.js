import {ReactComponent as Advantages1} from '../assets/icons/advantages/advantages-1.svg'
import {ReactComponent as Advantages2} from '../assets/icons/advantages/advantages-2.svg'
import {ReactComponent as Advantages3} from '../assets/icons/advantages/advantages-3.svg'
import {ReactComponent as Advantages4} from '../assets/icons/advantages/advantages-4.svg'
import {ReactComponent as Advantages5} from '../assets/icons/advantages/advantages-5.svg'
import {ReactComponent as Advantages6} from '../assets/icons/advantages/advantages-6.svg'
import {ReactComponent as Advantages7} from '../assets/icons/advantages/advantages-7.svg'
import {ReactComponent as Advantages8} from '../assets/icons/advantages/advantages-8.svg'

export const Advantages = () => {
    const advantagesCards = [{
        text: 'Идейные соображения высшего порядка, а также постоянный количественный рост',
        icon: Advantages1,

    },
    {
        text: 'Значимость этих проблем настолько очевидна, что вопрос остаётся открытым',
        icon: Advantages2,
    },
    {
        text: 'Таким образом реализация плановых заданий играет важную роль для понимания',
        icon: Advantages3,
    },
        {
            text: 'Повседневная практика показывает, что сложившаяся структура организации',
            icon: Advantages4,
        },
        {
            text: "Равным образом рамки и место обучения кадров способствует подготовки сотрудника",
            icon: Advantages5,
        },
        {
            text: 'Консультация с активом влечёт за собой процесс внедрения услуг нашего сервиса',
            icon: Advantages6,
        },
        {
            text: 'Повседневная практика показывает, что дальнейшее развитие различных',
            icon: Advantages7,

        },
        {
            text: 'Значимость этого настолько очевидна, что консультация наших экспертов помогает',
            icon: Advantages8,
        }
    ]

    return (<section className='mb-[70px]' id={'advantages'}>
        <h3 className='section_title'>Преимущества</h3>
        <ul className='grid grid-cols-4 gap-[22px]'>{advantagesCards.map((advantage, index) => (
            <li className='card flex flex-col gap-y-[10px] pt-[40px] pb-[32px] col-span-1'>
                {<advantage.icon/>}
                <p className='leading-[200%]'>{advantage.text}</p>
            </li>
        ))}</ul>
    </section>)
}
