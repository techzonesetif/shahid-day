import { Link } from 'react-router-dom';
import style from '../home/page.module.css'

function Footer() {
  return (
    <footer>
      <div className={style["footer-top"]}>
        <div className={style["footer-left"]}>
            <a to={'/'}>
                <p className={style["logo-footer"]}>Algerian History</p>
            </a>
          <div className={style["footer-address"]}>
            <p>100 Raoul Wallenberg Place, SW</p>
            <p>Washington, DC 20024-2126</p>
            <p>Main telephone: 202.488.0400</p>
            <p>TTY: 202.488.0406</p>
          </div>
        </div>
        <div className={style["footer-right"]}>
            <ul>
                <li className={style["header"]}>Pages</li>
                <a href={'/article'}><li className={style["content"]}>Articles</li></a>
                <a href={'#events-section'}><li className={style["content"]}>Events</li></a>
                <a href={'#martyr-section'}><li className={style["content"]}>Martyrs</li></a>
            </ul>
            <ul>
                <li className={style["header"]}>Follow us</li>
                <a href={''}><li className={style["content"]}>Instagram</li></a>
                <a href={''}><li className={style["content"]}>Github</li></a>
                <a href={''}><li className={style["content"]}>Twitter</li></a>
            </ul>
            <ul>
                <li className={style["header"]}>Legal</li>
                <a href={''}><li className={style["content"]}>Terms and conditions</li></a>
                <a href={''}><li className={style["content"]}>Privacy policy</li></a>
                <a href={''}><li className={style["content"]}>Confront</li></a>
            </ul>
        </div>
      </div>
      <hr className={style["footer-divider"]} />
      <p className={style["rights"]}>&#xA9;{new Date().getFullYear()} <a target='_blank' href='https://linktr.ee/techzone._.club' className={style["club"]}>TechZone</a>,All Rights Reserved.</p>
    </footer>
  )
}
export default Footer;