import style from './page.module.css'
import HeroSection from '../components/HeroSection'
import EventSection from '../components/EventSection'
import QuotesSection from '../components/QuotesSection'
import MartyrsSection from '../components/MartyrsSection'


export default function Home() {
  return (
    <div className={style.container}>
      <HeroSection /> 
      <hr />
      <EventSection />
      <hr />
      <MartyrsSection />
      <hr />
      <QuotesSection />
    </div>
  )
}