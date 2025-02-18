import { memo, useMemo } from 'react';
import { MartyrData } from "../data/MartyrsCardsData";
import MartyrCard from "./UI/MartyrCard";
import style from "../home/page.module.css";

const MartyrsSection = memo(function MartyrsSection() {
  const martyrs = useMemo(() => [
    MartyrData.m1,
    MartyrData.m2,
    MartyrData.m3,
    MartyrData.m4,
    MartyrData.m5,
    MartyrData.m6
  ], []);

  return (
    <section 
      style={{ scrollMarginTop: "80px" }} 
      id="martyrs-section" 
      className={style["martyr-section"]}
      aria-labelledby="martyrs-heading"
    >
      <div className={style["header-section"]}>
        <h2 id="martyrs-heading">Martyrs</h2>
      </div>
      <div 
        className={style["cards-section"]}
        role="list"
        aria-label="List of Algerian martyrs"
      >
        {martyrs.map((martyr, index) => (
          <MartyrCard 
            key={`martyr-${index}-${martyr.id}`} 
            {...martyr}
            role="listitem"
          />
        ))}
      </div>
    </section>
  );
});

// Optional: Add display name for better React DevTools visibility
MartyrsSection.displayName = 'MartyrsSection';

<<<<<<< HEAD
=======
function MartyrsSection() {
    return (
        <section style={{scrollMarginTop: "80px"}} id="martyrs-section" className={style["martyr-section"]}>
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
>>>>>>> 50739977a8a6d27ebc94dc04a3d98f98422cc9b8
export default MartyrsSection;