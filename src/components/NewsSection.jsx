import style from '../pages/home/page.module.css'

function NewsSection() {
  return (
    <section className={style["news"]}>
      <h2>NEWS</h2>
      <div className={style["news-grid"]}>
        <div className={style["news-card"]}>
          <h3>FEATURED</h3>
          <p>UNITED STATES HOLOCAUST MEMORIAL MUSEUM CONDEMNS MISUSE OF HOLOCAUST IN PUBLIC DISCOURSE</p>
        </div>
        <div className={style["news-card"]}>
          <p>MUSEUM STRONGLY CONDEMNS ANTISEMITIC ATTACKS IN AMSTERDAM</p>
          <span className={style["news-date"]}>November 8, 2024</span>
        </div>
        <div className={style["news-card"]}>
          <p>MUSEUM CALLS ON COLLEGES AND UNIVERSITIES TO ADDRESS RISING ANTISEMITISM ON CAMPUSES</p>
          <span className={style["news-date"]}>April 22, 2024</span>
        </div>
      </div>
      <a href="#" className={style["show-more"]}>SHOW MORE NEWS STORIES</a>
    </section>
  )
}

export default NewsSection;