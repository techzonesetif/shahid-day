import { cardsData } from '../data/EventsCardsData';
import style from '../home/page.module.css'
import EventCard from './UI/EventCard';

function EventSection() {

    return (
      <section id='Events-section' className={style["events"]}>
        <h2>Famous Events</h2>
        <div className={style["events-grid"]}>
          <EventCard {...cardsData.card1} />
          <EventCard {...cardsData.card2} />
          <EventCard {...cardsData.card3} />
          <EventCard {...cardsData.card4} />
          <EventCard {...cardsData.card5} />
          <EventCard {...cardsData.card6} />
        </div>
        <a href="/article" className={style["view-events"]} rel="noopener noreferrer">
          For more event
        </a>
      </section>
    )
}
export default EventSection;