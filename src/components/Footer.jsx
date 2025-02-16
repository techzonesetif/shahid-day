import { Link } from 'react-router-dom';
import style from '../pages/home/page.module.css'

function Footer() {
  return (
    <footer>
      <div className={style["footer-top"]}>
        <div className={style["footer-left"]}>
            <div className={style["site-logo"]}>
                <Link to={'/'}>
                    <p className={style["logo"]}>ALGERIAN HISTORY</p>
                </Link>
            </div>
          <div className={style["footer-address"]}>
            <p>100 Raoul Wallenberg Place, SW</p>
            <p>Washington, DC 20024-2126</p>
            <p>Main telephone: 202.488.0400</p>
            <p>TTY: 202.488.0406</p>
          </div>
        </div>
        <div className={style["newsletter"]}>
          <h4>Get the Latest News</h4>
          <div className={style["email-submit"]}>
            <input type="text" name="text" className={style["input"]} placeholder="Type your email" />
            <button className={style["subscribe-btn"]}>Submit</button>
          </div>
        </div>
      </div>
      <hr className={style["footer-divider"]} />
      <div className={style["footer-bottom"]}>
        <a href="#">About the Museum</a>
        <a href="#">Contact the Museum</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Accessibility</a>
        <a href="#">Legal</a>
      </div>
    </footer>
  )
}
export default Footer;