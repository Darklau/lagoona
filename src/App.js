import logo from './logo.svg';
import './App.css';
import {Header} from "./components/header";
import {Hero} from "./components/hero";
import {Advantages} from "./components/advantages";
import {Services} from "./components/services";
import {Placement} from "./components/placing";

function App() {
  return (
      <body className='bg-grayPale pt-[30px] '>
      <div className='container md:max-w-[1170px]'>
      <Header/>
    <main>
        <Hero/>

        <section className='mb-[70px]' id='about'>
            <h3 className='section_title'>О нас</h3>
            <p className='text-16 max-w-[888px] leading-[200%]'>
                Идейные соображения высшего порядка, а также сложившаяся структура организации влечёт за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации требуют определения и уточнения существенных финансовых и административных условий.
            </p>
        </section>
        <Services/>
        <Advantages/>
        <Placement/>
        <div>

        </div>
    </main>
      </div>
      </body>
  );
}

export default App;
