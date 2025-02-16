import style from '../pages/home/page.module.css'

function HeroSection() {
    return (
      <section 
        className={style["hero"]}
        title="Learn more about Auschwitz">
        <h2>WHAT WAS AUSCHWITZ?</h2>
        <p>The most infamous site of Nazi genocide was liberated 80 years ago</p>
      </section>
    )
}
export default HeroSection;