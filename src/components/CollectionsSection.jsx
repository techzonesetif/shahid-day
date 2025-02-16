import style from '../pages/home/page.module.css'
import testImg from '../assets/test.png'

function CollectionsSection() {
  return (
    <section className={style["collections"]}>
      <div className={style["collections-container"]}>
        <div className={style["image-column"]}>
          <img src={testImg} alt="Collection Preview" />
        </div>
        <div className={style["content-column"]}>
          <h2>SEARCH OUR COLLECTIONS</h2>
          <p>The Museums collections database contains more than 270,000 records, including:</p>
          <ul className={style["collection-list"]}>
            <li>Photos and albums - Images of life before, during and after the Holocaust</li>
            <li>Personal stories - Interviews, home movies, memoirs, and diaries</li>
            <li>Films - Historical footage and contemporary films about the Holocaust</li>
          </ul>
          <button className={style["collection-btn"]}>Explore Collections</button>
        </div>
      </div>
    </section>
  )
}
export default CollectionsSection;