// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import style from '../../home/page.module.css'
// import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


// function MartyrCard(props) {

//     const {title, descreption, date, img} = props;

//     return (
//         <section className={style["martyr-card"]}>
//             <img src={img} alt='martyr-img' />
//             <div className={style["content-section"]}>
//                 <h3 className={style['title']}>{title}</h3>
//                 <p className={style['desc']}>{descreption}</p>
//                 <div className={style["date-section"]}>
//                     <FontAwesomeIcon icon={faCalendar} /> {date}
//                 </div>
//                 <a href='' className={style["card-link"]}>
//                     See More <FontAwesomeIcon icon={faChevronRight} />
//                 </a>
//             </div>
//         </section>
//     )
// }

// export default MartyrCard;
<<<<<<< HEAD
import { memo } from 'react';
=======
import { memo, useMemo } from 'react';
>>>>>>> 50739977a8a6d27ebc94dc04a3d98f98422cc9b8
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import style from '../../home/page.module.css';

<<<<<<< HEAD
const MartyrCard = memo(function MartyrCard({ title, date, img, slug }) {
 
=======
const MartyrCard = memo(function MartyrCard({ title, description, date, img, slug }) {
  // Memoize formatted date
  const formattedDate = useMemo(() => {
    try {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return date; // Fallback to raw date string
    }
  }, [date]);
>>>>>>> 50739977a8a6d27ebc94dc04a3d98f98422cc9b8

  return (
    <section 
      className={style["martyr-card"]}
      role="article"
      aria-labelledby={`martyr-title-${slug}`}
    >
      <img 
        src={img}
        loading="lazy"
        alt={`Portrait of ${title}`}
        className={style["martyr-img"]}
        width={400}
        height={500}
        decoding="async"
      />
<<<<<<< HEAD
     
=======
      
>>>>>>> 50739977a8a6d27ebc94dc04a3d98f98422cc9b8
      <div className={style["content-section"]}>
        <h3 
          id={`martyr-title-${slug}`}
          className={style['title']}
        >
<<<<<<< HEAD
         <span>{title}</span> 
          <div 
=======
          {title}
        </h3>
        
        <p className={style['desc']}>
          {description}
        </p>
        
        <div 
>>>>>>> 50739977a8a6d27ebc94dc04a3d98f98422cc9b8
          className={style["date-section"]}
          aria-label="Date of martyrdom"
        >
          <FontAwesomeIcon icon={faCalendar} aria-hidden="true" />
<<<<<<< HEAD
          {date}
        </div>
        </h3>
        
        {/* <p className={style['desc']}>
          {description}
        </p> */}
        
        
=======
          <time dateTime={date}>{formattedDate}</time>
        </div>
>>>>>>> 50739977a8a6d27ebc94dc04a3d98f98422cc9b8
        
        <Link 
          to={`/martyrs/${slug}`}
          className={style["card-link"]}
          aria-label={`Learn more about ${title}`}
          state={{ from: 'martyr-card' }}
        >
          See More
          <FontAwesomeIcon 
            icon={faChevronRight}
            aria-hidden="true"
            className={style["link-icon"]}
          />
        </Link>
      </div>
    </section>
  );
});

MartyrCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

MartyrCard.displayName = 'MartyrCard';

export default MartyrCard;