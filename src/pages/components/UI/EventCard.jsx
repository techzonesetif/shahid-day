import { Link } from "react-router-dom";
import style from '../../home/page.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCalendar } from "@fortawesome/free-solid-svg-icons";

function EventCard({title, description, date, link, img}) {
    

    return (
        <div className={style["event-card"]}>
            <img src={img} alt="Event image" />
            <div className={style["event-content"]}>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className={style["event-date"]}>
                    <FontAwesomeIcon icon={faCalendar} /> {date}
                </span>
                <Link to={link}>
                    <p className={style["card-link"]}>
                        <span>Read more</span>
                        <FontAwesomeIcon className={style["link-icon"]} icon={faAngleRight} />
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default EventCard;