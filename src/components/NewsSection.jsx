import style from '../pages/home/page.module.css'
import NewsCard from './UI/NewsCard';

function NewsSection() {

  const cardDate = {
    card1: {
      title: "Featured",
      discreption: "United states holocaust memorial museum condemns misuse of holocaust in public discourse",
      date:"November 8, 2024"
    },
    card2: {
      title: "Featured",
      discreption: "Museum strongly condemns antisemitic attacks in amsterdam<",
      date:"November 8, 2024"
    },
    card3: {
      title: "Featured",
      discreption: "Museum calls on colleges and universities to address rising antisemitism on campuses",
      date:"April 22, 2024"
    }
  }

  return (
    <section className={style["news"]}>
      <h2>News</h2>
      <div className={style["news-grid"]}>
        <NewsCard {...cardDate.card1} />
        <NewsCard {...cardDate.card2} />
        <NewsCard {...cardDate.card3} />
      </div>
      <a href="#" className={style["show-more"]}>Show More News Stories</a>
    </section>
  )
}

export default NewsSection;