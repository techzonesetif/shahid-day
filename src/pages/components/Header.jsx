import style from '../home/page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Header() {
  const [menuSvg, setMenuSvg] = useState(faBars);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMenuBtn = () => {
    setMenuSvg(prev => (prev === faBars ? faXmark : faBars));
    setIsActive(prev => !prev);
  };

  const handleNavigation = (targetSection) => {
    // Navigate to the home page
    navigate('/');

    // After a short delay, scroll to the target section
    setTimeout(() => {
      const section = document.querySelector(targetSection);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // Adjust the delay as needed
  };

  useEffect(() => {
  }, [menuSvg]);

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
              <a href={'#'}>
                <h2>Home</h2>
              </a>
            </li>
            <li className={style["nav-item"]}>
              <a href={'/article'}>
                <h2>Articles</h2>
              </a>
            </li>
            <li className={style["nav-item"]}>
              <a
                href="#events-section"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('#events-section');
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