import './footer.scss';
import { isAuthorized } from '../../utils/helpers';
import { useSelector } from 'react-redux';
export const Footer = () => {
    const { authentificated } = useSelector(state => state.auth);
    return <div className={`footer-wrapper ${authentificated && 'no-draft'}`}>
        <div className={`footer ${authentificated && 'no-draft'}`}>
            <div>
                Ukraine
                <span>Steampowered</span>
            </div>
            <div>
                © 2022 CS:GO ROULETTE 228
            </div>
        </div>
    </div>
}