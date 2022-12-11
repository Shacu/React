
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget.js';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navBarDiv">
            <nav>
                <div>
                    <div>
                        <Link to= {"/"}>
                        <img src="" alt="Logo" />
                        Broked
                        </Link>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link to={"/"}>Tienda</Link>
                            </li>
                            <li>
                                <a href="#">Envios</a>
                            </li>
                            <li>
                                <a href="#">¿Quienes somos?</a>
                            </li>
                            <li>
                                <CardWidget />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;