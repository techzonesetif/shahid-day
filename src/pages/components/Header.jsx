import style from '../home/page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [menuSvg, setMenuSvg] = useState(faBars);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()
  const handleMenuBtn = () => {
    setMenuSvg(prev => (prev === faBars ? faXmark : faBars));
    setIsActive(prev => !prev);
  };

  const handleNavigation = (targetSection) => {
    navigate('/')
        setTimeout(() => {
          if(targetSection=='#hero'){document.querySelector('body').scrollTo({top: 0,behavior: 'smooth'}) ; return}
          document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
          }, 50);     
    // if (location.pathname=='/') {
    //   navigate('/')

    //   document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
      
    // }else{
    //   navigate('/')
    //     setTimeout(() => {
    //       document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
    //       }, 50); 
          
    // }
    // setTimeout(() => {
    //   const section = document.querySelector(targetSection);
    //   if (section) {
    //     section.scrollIntoView({ behavior: 'smooth' });
    //   }
    // }, 500); 
  };

  // useEffect(() => {
  // }, [menuSvg]);



  return (
    <header>
      <div className={style["navbar"]}>
        <div className={style["container"]}>
          <div className={style["site-logo"]}>
            <a href={'#'}>
              <p className={style["logo"]}>Algerian History</p>
            </a>
          </div>
          <button
            className={style["menu-toggle"]}
            aria-label="Toggle navigation menu"
            onClick={handleMenuBtn}
          >
            <FontAwesomeIcon icon={menuSvg} key={menuSvg.iconName} />
          </button>
        </div>
        <nav>
          <ul className={`${style["nav-list"]} ${isActive ? style["active"] : ""}`}>
            <li className={style["nav-item"]}>
              <span 
                onClick={(e) => {
                  handleNavigation('#hero');

                  handleMenuBtn()
                }}
              >
                <h2>Home</h2>
              </span>
            </li>
            <Link to={'/article'}>

            <li className={style["nav-item"]}>
                <h2>Articles</h2>
              
            </li>
            </Link>
            <li className={style["nav-item"]}>
              <a
                href="#events-section"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('#events-section');
                  handleMenuBtn()
                }}
              >
                <h2>Events</h2>
              </a>
            </li>
            <li className={style["nav-item"]}>
              <a
                href="#martyrs-section"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('#martyrs-section');
                  handleMenuBtn()
                }}
              >
                <h2>Martyrs</h2>
              </a>
            </li>
            <li className={style["nav-item"]}>
              <a
                href="#quote-section"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('#quote-section');
                  handleMenuBtn()
                }}
              >
                <h2>Quotes</h2>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;