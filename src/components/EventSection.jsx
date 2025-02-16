import style from '../pages/home/page.module.css'
import testImg from '../assets/test.png'

function EventSection() {
    return (
      <section className={style["events"]}>
        <h2>NATIONAL EVENTS</h2>
        <div className={style["events-grid"]}>
          <div className={style["event-card"]}>
            <img src={testImg} alt="Event image" />
            <div className={style["event-content"]}>
              <h3>2025 First Person Series: Joël Nommick</h3>
              <p>THIS EVENT WILL BE LIVESTREAMED. LOOP ALL ET</p>
            </div>
          </div>
          <div className={style["event-card"]}>
            <img src={testImg} alt="Event image" />
            <div className={style["event-content"]}>
              <h3>2025 New York Next Generation Event</h3>
              <p>NEW YORK, NY • 6:20 P.M. ET</p>
            </div>
          </div>
          <div className={style["event-card"]}>
            <img src={testImg} alt="Event image" />
            <div className={style["event-content"]}>
              <h3>Surviving the Holocaust Together</h3>
              <p>WASHINGTON, DC • 6:20 P.M. ET</p>
            </div>
          </div>
          <div className={style["event-card"]}>
            <img src={testImg} alt="Event image" />
            <div className={style["event-content"]}>
              <h3>How Holocaust Education Is Shaping the Future of Military Leadership</h3>
              <p>GLOBECE, IL • 7:20 P.M. ET</p>
            </div>
          </div>
        </div>
        <a href="#" className={style["view-events"]} target="_blank" rel="noopener noreferrer">
          FOR MORE EVENTS
        </a>
      </section>
    )
}
export default EventSection;