import './App.scss'
import Carrosel from './components/carrosel/Carrosel'
import Home from './components/home/Home'
import NavBar from './components/navbar/NavBar'
import {Swiper, SwiperSlide} from "swiper/react"
import Sobre from './components/sobre/Sobre'
import Beneficios from './components/beneficios/Beneficios'
import ComoParticipar from './components/comoParticipar/comoParticipar'
import Perguntas from './components/perguntas/Perguntas'

function App() {
  return (
    <main>
      <header className='container-header'>
        <div>
          <NavBar/>
        </div>
      </header>
      <div className='hero'>
        <Swiper>
          <SwiperSlide>
              <Carrosel/>
          </SwiperSlide>
        </Swiper>
      </div>
      <section>
        <div>
          <Home/>
        </div>
      </section>
      <section>
        <Sobre/>
      </section>
      <section>
        <Beneficios/>
      </section>
      <section style={{padding: '60px 0', overflow: 'hidden'}}>
        <ComoParticipar/>
      </section>
      <section>
        <Perguntas/>
      </section>
    </main>
  );
}

export default App
