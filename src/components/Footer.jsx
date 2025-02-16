import { Link } from 'react-router-dom';
import style from '../pages/home/page.module.css'

function Footer() {
  return (
    <footer>
      <div className={style["footer-top"]}>
        <div className={style["footer-left"]}>
            <Link to={'/'}>
                <p className={style["logo-footer"]}>ALGERIAN HISTORY</p>
            </Link>
          <div className={style["footer-address"]}>
            <p>100 Raoul Wallenberg Place, SW</p>
            <p>Washington, DC 20024-2126</p>
            <p>Main telephone: 202.488.0400</p>
            <p>TTY: 202.488.0406</p>
          </div>
        </div>
        <div className={style["footer-right"]}>
            <ul>
                <Link to={''}><li className={style["header"]}>Pages</li></Link>
                <Link to={''}><li className={style["content"]}>Learn about</li></Link>
                <Link to={''}><li className={style["content"]}>Remember</li></Link>
                <Link to={''}><li className={style["content"]}>Confront</li></Link>
            </ul>
            <ul>
                <Link to={''}><li className={style["header"]}>Follow us</li></Link>
                <Link to={''}><li className={style["content"]}>Instagram</li></Link>
                <Link to={''}><li className={style["content"]}>Github</li></Link>
                <Link to={''}><li className={style["content"]}>Twitter</li></Link>
            </ul>
            <ul>
                <Link to={''}><li className={style["header"]}>Legal</li></Link>
                <Link to={''}><li className={style["content"]}>Terms and conditions</li></Link>
                <Link to={''}><li className={style["content"]}>Privacy policy</li></Link>
                <Link to={''}><li className={style["content"]}>Confront</li></Link>
            </ul>
        </div>
      </div>
      <hr className={style["footer-divider"]} />
      <p className={style["rights"]}>&#xA9; Algerian History. All Rights Reserved.</p>
    </footer>
  )
}
export default Footer;