import {Swiper, SwiperSlide} from 'Swiper/react';
import Swiper from 'swiper';


export default function  Carrosel() {
    
    const data = [
        { id: '1', image: 'src/assets/finaq-slide-financiamento-estudantil-2.png' },
        { id: '2', image: 'src/assets/image.png'},
    ]
    
    return(

        <div className="Container-carrosel">
            <Swiper>
            {data.map((item) =>(
                <img
                    src={item.image}
                    alt='Carrosel'
                    className='carrosel-item'
                />
            ))}
            </Swiper>
        </div>
    )
}