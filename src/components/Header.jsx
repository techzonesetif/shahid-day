import { Link } from 'react-router-dom';
import style from '../pages/home/page.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';


function Header() {
  const [menuSvg, setMenuSvg] = useState(faBars);
  const [isActive, setIsActive] = useState(false);

  const handleMenuBtn = () => {
    setMenuSvg(prev => (prev === faBars ? faXmark : faBars));
    setIsActive(prev => !prev);

  }

  useEffect(() => {
  }, [menuSvg])

  return (
      <header>
        <div className={style["navbar"]}>
          <div className={style["container"]}>
            <div className={style["site-logo"]}>
              <Link to={'/'}>
                <p className={style["logo"]}>ALGERIAN HISTORY</p>
              </Link>
            </div>
            <button 
              className={style["menu-toggle"]} 
              aria-label="Toggle navigation menu"
              onClick={handleMenuBtn}
              >
              <FontAwesomeIcon icon={menuSvg} key={menuSvg.iconName}/>
            </button>
          </div>
          <nav>
            <ul className={`${style["nav-list"]} ${isActive ? style["active"] : ""}`}>
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