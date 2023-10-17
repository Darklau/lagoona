import servicesCard1 from "../assets/images/servicesCard-1.png";
import servicesCard2 from "../assets/images/servicesCard-2.png";
import servicesCard3 from "../assets/images/servicesCard-3.png";
import servicesCard4 from "../assets/images/servicesCard-4.png";

export const Services = () => {
  const servicesCards = [
    {
      link: "Эксклюзивное обслуживание",
      text: "Равным образом постоянный количественный рост и сфера нашей активности",
      src: servicesCard1,
    },
    { link: "Аренда банкетных залов", text: "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм", src: servicesCard2 },
    { link: "Сауны, бассейны, бани, фитнес-залы", text: "Не следует, однако забывать, что начало повседневной работы по формированию позиции", src: servicesCard3 },
    {
      link: "Охраняемые автомобильные стоянки",
      text: "Не следует, однако забывать, что начало повседневной работы по формированию позиции",
      src: servicesCard4,
    },
  ];

  return (<section className='mb-[70px]' title='services'>
      <h3 className='section_title'>Услуги</h3>
      <ul className='grid-cols-2 grid gap-[24px]'>
          {servicesCards.map((card, index) => (
              <li style={{backgroundImage: `url('${card.src}')`}} className='bg-no-repeat pb-[35px] bg-[length:100%_165px] card pt-[191px] col-span-1' key={index}>
              <a href='#' className='link leading-[200%]'>{card.link}</a>
                  <p className='leading-[200%]'>{card.text}</p>
              </li>
          ))}
      </ul>

  </section>)
};
