import './App.css'
import Carrosel from './components/carrosel/Carrosel'
import NavBar from './components/navbar/NavBar'
import {Swiper, SwiperSlide} from "swiper/react"

function App() {
  return (
    <main>
      <header>
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
    </main>
    
  )
}

export default App
