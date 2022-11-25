
import navBar from './Components/NavBar/navBar.css';

const NavBar = () => {
    return (
        <div className="navBarDiv">
            <nav>
                <div>
                    <div>
                        <a>
                        <img src="" alt="Logo" />
                        Broked
                        </a>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="#">Tienda</a>
                            </li>
                            <li>
                                <a href="#">Envios</a>
                            </li>
                            <li>
                                <a href="#">¿Quienes somos?</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;