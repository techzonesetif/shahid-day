import { faClock, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from '../../home/page.module.css'
import { Link } from "react-router-dom";

function NewsCard(props) {

    const {title, discreption, date, link} = props;

    return(
        <div className={style["news-card"]}>
            <h3 className={style["news-title"]}>{title}</h3>
                <p>{discreption}</p>
            <span className={style["news-date"]}>
                <FontAwesomeIcon icon={faClock} /> {date}
            </span>
            <Link to={link}>
                <p className={style["card-link"]}>
                    <span>Read more</span>
                    <FontAwesomeIcon className={style["link-icon"]} icon={faAngleRight} />
                </p>
            </Link>
        </div>
    )
}
export default NewsCard;