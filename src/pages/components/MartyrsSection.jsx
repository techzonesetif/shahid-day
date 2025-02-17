import { MartyrData } from "../data/MartyrsCardsData";
import MartyrCard from "./UI/MartyrCard";
import style from "../home/page.module.css"

function MartyrsSection() {
    return (
        <section id="martyrs-section" className={style["martyr-section"]}>
            <div className={style["header-section"]} >
                <h2>Maryters</h2>
            </div>
            <div className={style["cards-section"]}>
                <MartyrCard {...MartyrData.m1}/>
                <MartyrCard {...MartyrData.m2}/>
                <MartyrCard {...MartyrData.m3}/>
                <MartyrCard {...MartyrData.m4}/>
                <MartyrCard {...MartyrData.m5}/>
                <MartyrCard {...MartyrData.m6}/>
            </div>
        </section>
    );
}
export default MartyrsSection;