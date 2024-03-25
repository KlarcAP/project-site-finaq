import './App.css'
import Carrosel from './components/carrosel/Carrosel'
import Home from './components/navbar/NavBar'
import {Swiper, SwiperSlide} from "swiper/react"

function App() {
  return (
    <main>
      <header>
        <div>
          <Home/>
        </div>
      </header>
      <section>
        <Swiper>
          <SwiperSlide>
            <Carrosel/>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
    
  )
}

export default App
