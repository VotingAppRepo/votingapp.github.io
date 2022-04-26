import './loader.scss';
import { piecesOfAdvice } from './constants';

export const Loader = () => {
    const randAdvice = piecesOfAdvice[Math.floor(Math.random()*piecesOfAdvice.length)]

    return <div className='loader'>
        <div className='loader-title'>Загрузка!</div>
        <div className="ping-pong-container">
            <div className="paddle">
                <div className="solid">
                <div className="surface"></div>
                <div className="hold">
                    <div className="top"></div>
                    <div className="transition"></div>
                    <div className="handle"></div>
                </div>
                </div>
                <div className="wiggly">
                <div className="string"></div>
                <div className="ball"></div>
                </div>
            </div>
        </div>
        <div className='advice'>
            <div className='title'>{randAdvice.title}</div>
            <div>{randAdvice.text}</div>
        </div>
        
    </div>
}