import style from '../home/page.module.css'
import NewsCard from './UI/QuoteCard';

function QuotesSection() {

  const cardDate = {
    card1: {
      title: "Featured",
      discreption: "United states holocaust memorial museum condemns misuse of holocaust in public discourse",
      date:"November 8, 2024",
      link:''
    },
    card2: {
      title: "Featured",
      discreption: "Museum strongly condemns antisemitic attacks in amsterdam<",
      date:"November 8, 2024",
      link:''
    },
    card3: {
      title: "Featured",
      discreption: "Museum calls on colleges and universities to address rising antisemitism on campuses",
      date:"April 22, 2024",
      link:''
    }
  }

  return (
    <section id='quote-section' className={style["news"]}>
      <h2>Quotes</h2>
      <div className={style["news-grid"]}>
        <NewsCard {...cardDate.card1} />
        <NewsCard {...cardDate.card2} />
        <NewsCard {...cardDate.card3} />
      </div>
      <a href="#" className={style["show-more"]}>Show More News Stories</a>
    </section>
  )
}

export default QuotesSection;