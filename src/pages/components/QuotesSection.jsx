import style from '../home/page.module.css'
import QuoteCard from './UI/QuoteCard';

function QuotesSection() {

  const cardDate = {
    card1: {
      author: "Featured",
      description: "United states holocaust memorial museum condemns misuse of holocaust in public discourse"
    },
    card2: {
      author: "Featured",
      description: "Museum strongly condemns antisemitic attacks in amsterdam"
    },
    card3: {
      author: "Featured",
      description: "Museum calls on colleges and universities to address rising antisemitism on campuses"
    }
  }

  return (
    <section id='quote-section' className={style["quotes"]}>
      <h2>Quotes</h2>
      <div className={style["scroll-container"]}>
        <ul aria-hidden="true" className={style["quote-container"]}>
            
            <QuoteCard {...cardDate.card3} />
            <QuoteCard {...cardDate.card3} />
            <QuoteCard {...cardDate.card3} />
            <QuoteCard {...cardDate.card3} />
            <QuoteCard {...cardDate.card3} />
            <QuoteCard {...cardDate.card3} />
        </ul>
        <ul aria-hidden="true" className={style["quote-container"]}>
            
            <QuoteCard {...cardDate.card3} />
            <QuoteCard {...cardDate.card3} />
            <QuoteCard {...cardDate.card3} />
            <QuoteCard {...cardDate.card3} />
            <QuoteCard {...cardDate.card3} />
            <QuoteCard {...cardDate.card3} />

        </ul>
      </div>
    </section>
  )
}

export default QuotesSection;