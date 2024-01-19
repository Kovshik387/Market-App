import styles from './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.js';

export default function Header() {
    return (
        <>
        {/* container-category */}
        <div className="{styles.}"></div>
            <header className="black head">
                <nav className="padding-10">
                    <div>
                        <a className="brand" href="Index.html">Market</a>
                        <button type="button" className="btn text-white" data-bs-toggle="dropdown">Категории</button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a className="dropdown-item" href="category.html">Категория</a>
                                <a className="dropdown-item" href="#">Категория</a>
                                <a className="dropdown-item" href="#">Категория</a>
                                <a className="dropdown-item" href="#">Категория</a>
                            </li>
                        </ul>
                        <button type="button" className="search_product">
                            <i className="bi-search"></i>
                            <span>Найти...</span>
                        </button>
                        <a className="profile-link" href="profile.html">
                            <i className="bi-person"></i>
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}

