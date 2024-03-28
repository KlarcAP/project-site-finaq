import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carrosel() {
    
    const data = [
        { id: '1', image: 'src/assets/finaq-slide-financiamento-estudantil-2.png' },
        { id: '2', image: 'src/assets/image.png'},
    ]
    
    return(

        <div className="Container-carrosel">
            <Swiper  
            slidesPerView={1}
            pagination={{clickable: true}} 
            navigation
            loop
            > 
                {data.map((item) =>(
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt='Carrosel'
                            className='carrosel-item'
                        />
                    </SwiperSlide>   
                ))}
            </Swiper>
        </div>
    )
}