import { Link } from 'react-router-dom';
import style from '../pages/home/page.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function Header() {
  const [menuSvg, setMenuSvg] = useState(faBars);

  return (
      <header>
        <div className={style["navbar"]}>
          <div className={style["site-logo"]}>
            <Link to={'/'}>
              <p className={style["logo"]}>ALGERIAN HISTORY</p>
            </Link>
          </div>
          <button 
            className={style["menu-toggle"]} 
            aria-label="Toggle navigation menu"
            onClick={() => setMenuSvg(prev => prev === faBars ? faXmark : faBars)}
          >
            <FontAwesomeIcon icon={menuSvg} />
          </button>
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