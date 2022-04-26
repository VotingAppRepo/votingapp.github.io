import './draft-layout.scss'
import { Carousel } from 'react-bootstrap';
import { draftCarousel } from './constants';
import { Link } from 'react-router-dom';

export const DraftLayout = () => {
    return <div className='draft-layout'>
        <div className='title'>    
            Сайт для випробування своєї удачі на шанс випадіння кейсів в CS:GO 
        </div>
        <Carousel interval={1000} >
            {draftCarousel.map((img, index) => (
                <Carousel.Item key={index}>
                    <div><img src={img} alt="Skin"/></div>
                </Carousel.Item>
            ))}
        </Carousel>
        <div className='title'>Щоб продовжити потрібно <Link to='/register'>зареєструватись.</Link></div>
    </div>
}