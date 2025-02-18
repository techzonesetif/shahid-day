import style from '../home/page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer>
      <div className={style["footer-top"]}>
        <div className={style["footer-left"]}>
            <a to={'/'}>
                <p className={style["logo-footer"]}>Algerian History</p>
            </a>
          <div className={style["footer-address"]}>
            <p>University Farhat Abbas 1, Setif</p>
            <p>faculty of sciences</p>
            <p className={style["fac-links"]}>
              <FontAwesomeIcon icon={faFacebook} />
              <a target='_blank' href='https://www.facebook.com/fsciences/'><span>Visit out page</span></a>
            </p>
            <p className={style["fac-links"]}>
              <FontAwesomeIcon icon={faEnvelope} />
              <a target='_blank' href='https://mail.univ-setif.dz/'><span>Check Our email</span></a>
            </p>
          </div>
        </div>
        <div className={style["footer-right"]}>
            <ul>
                <li className={style["header"]}>Pages</li>
                <a href={'/article'}><li className={style["content"]}>Articles</li></a>
                <a href={'#events-section'}><li className={style["content"]}>Events</li></a>
                <a href={'#martyr-section'}><li className={style["content"]}>Martyrs</li></a>
                <a href={'#quote-section'}><li className={style["content"]}>Quotes</li></a>
            </ul>
            <ul>
                <li className={style["header"]}>Follow us</li>
                <a target='_blank' href={'https://www.instagram.com/techzone._.club'}><li className={style["content"]}>Instagram</li></a>
                <a target='_blank' href={'https://www.facebook.com/people/TechZone-club/'}><li className={style["content"]}>Facebook</li></a>
                <a target='_blank' href={'https://discord.com/invite/zwmjCPDDzN'}><li className={style["content"]}>Discord</li></a>
            </ul>
            <ul>
                <li className={style["header"]}>Legal</li>
                <a href={'#'}><li className={style["content"]}>Terms and conditions</li></a>
                <a href={'#'}><li className={style["content"]}>Privacy policy</li></a>
                <a href={'#'}><li className={style["content"]}>Confront</li></a>
            </ul>
        </div>
      </div>
      <hr className={style["footer-divider"]} />
      <p className={style["rights"]}>&#xA9;{new Date().getFullYear()} <a target='_blank' href='https://linktr.ee/techzone._.club' className={style["club"]}>TechZone</a>,All Rights Reserved.</p>
    </footer>
  )
}
export default Footer;