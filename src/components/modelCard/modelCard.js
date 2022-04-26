import { Carousel } from 'react-bootstrap';
import { Typography, Rating } from '@mui/material';
import './modelCard.scss';

export const ModelCard = ({handleClick, model}) => {
    const {name, rating, images, id} = model
    return <div className='modal-card'>
        <div>{name}</div>
        <div>
            <Typography component="legend">Rating: </Typography>
            <Rating size="small" name="read-only" precision={0.5} readOnly value={rating}/>
        </div>
        <Carousel interval={10000} variant="dark">
            {images.map((img) => (
                <Carousel.Item key={img.id}>
                    <div><img onClick={() => handleClick(id)} src={img.url} alt="Model"/></div>
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
    
}