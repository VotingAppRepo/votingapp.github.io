import './header.scss';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserRequest } from '../../store/actions/auth/auth.actions';

export const SmokeCircle = () => {
    return <>
        <div className="circle"></div>
        <div className="circle2"></div>

        <svg>
        <filter id="wave">
            <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
            <animate attributeName="baseFrequency" dur="30s" values="0.02;0.005;0.02" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="30" />
        </filter>
        </svg>
    </>
}

export const Header = () => {
    const { authentificated, userRole } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const adminNavigation = <>
        <Link to="/admin">Навігація</Link>
        {/* <Button variant="light" onClick={()=>dispatch(logoutUserRequest())}>Вийти</Button> */}
        <Button variant="light" onClick={()=>{
            window.location.href = "/login"
            localStorage.removeItem('token')
        }}>Вийти</Button>
    </>

    const userNavigation = <>
        <Link to="/account/voting">Голосувати</Link>
        <Link to="/account/profile">Профіль</Link>
        <Button variant="light" onClick={()=>{
            window.location.href = "/login"
            localStorage.removeItem('token')
        }}>Вийти</Button>
    </>

    return <div className="header">
        <Link to={authentificated && userRole === 'User' ? '/account/profile' : '/'}>
            <div className='header-logo'>
                {authentificated 
                    ? <>
                        <SmokeCircle/>
                        <pre>V    T E</pre>
                    </>
                    : 'CS:GO ROULETTE'
                }
            </div>
        </Link>
        <div className='header-links'>
            {!authentificated 
                ? <>
                    <Link to="/login">Увійти</Link>
                    <Link to="/register">Зареєструватись</Link>
                </>
                : userRole === 'Admin' ? adminNavigation : userNavigation
            }
        </div>
    </div>
}