import style from './page.module.css'
import HeroSection from '../components/HeroSection'
import EventSection from '../components/EventSection'
import QuotesSection from '../components/QuotesSection'
import { Helmet } from 'react-helmet'

import MartyrsSection from '../components/MartyrsSection'


export default function Home() {
  return (
    <div className={style.container}>
       <Helmet>
  {/* Primary Meta Tags */}
  <title>Algerian History: 10,000 Years of Resistance & Cultural Heritage | Shahid Day</title>
  <meta name="description" content="Dive into Algeria's epic journey from ancient Numidian kingdoms to revolutionary independence. Explore rare archives, expert analyses, and interactive timelines of North Africa's largest nation." />
  <meta name="keywords" content="Algerian Revolution, FLN history, French colonialism in Algeria, Berber civilization, Algerian War of Independence 1954-1962, National Liberation Front, Battle of Algiers" />
  <meta name="author" content="Algerian Historical Society" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="revisit-after" content="7 days" />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="🇩🇿 Algerian History: From Ancient Berbers to Independence Heroes | Shahid Day" />
  <meta property="og:description" content="Interactive timeline of Algeria's struggle for freedom | 500+ historical documents & 4K archival footage | Expert-curated research since 2015" />
  <meta property="og:image" content="https://shahid-day.netlify.app/assets/hero-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://shahid-day.netlify.app" />
  <meta property="og:site_name" content="Shahid Day" />
  <meta property="og:locale" content="en_US" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ShahidDayHist" />
  <meta name="twitter:creator" content="@AlgerianHistTeam" />
  <meta name="twitter:image:alt" content="Algerian revolutionaries planting the national flag" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Shahid Day",
      "url": "https://shahid-day.netlify.app",
      "description": "Premier digital archive of Algerian historical documentation",
      "publisher": {
        "@type": "Organization",
        "name": "Algerian Historical Society",
        "logo": {
          "@type": "ImageObject",
          "url": "https://shahid-day.netlify.app/logo.png",
          "width": 600,
          "height": 60
        }
      },
      "foundingDate": "2015",
      "founder": {
        "@type": "Person",
        "name": "Ali Benmoussa"
      }
    })}
  </script>

  {/* Technical & Link Tags */}
  <link rel="canonical" href="https://shahid-day.netlify.app" />
  <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
  <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#a2fee38e" />
  <meta name="msapplication-TileColor" content="#e6e6e6" />
</Helmet>
      <HeroSection /> 
      <hr />
      <EventSection />
      <hr />
      <MartyrsSection />
      <hr />
      <QuotesSection />
      <hr />
    </div>
  )
}