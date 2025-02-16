import { Link } from 'react-router-dom';
import style from '../pages/home/page.module.css'

function Header() {
    return (
      <header>
        <div className={style["navbar"]}>
          <button className={style["menu-toggle"]} aria-label="Toggle navigation menu"></button>
          <div className={style["site-logo"]}>
            <Link to={'/'}>
              <p className={style["logo"]}>ALGERIAN HISTORY</p>
            </Link>
          </div>
          <nav>
            <ul className={style["nav-list"]}>
              <li className={style["nav-item"]}>
                <Link to={''}>
                  <h2>Learn About</h2>
                </Link>
              </li>
              <li className={style["nav-item"]}>
                <Link to={''}>
                  <h2>Remember</h2>
                </Link>
              </li>
              <li className={style["nav-item"]}>
                <Link to={''}>
                  <h2>Confront</h2>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }

export default Header;