import style from '../../home/page.module.css'

function QuoteCard(props) {

    const {author, description} = props;

    return(
        <div className={style["quotes-card"]}>
            <p className={style["quote-desc"]}>{description}</p>
            <h3 className={style["quote-title"]}>
                - {author}
            </h3>
        </div>
    )
}
export default QuoteCard;