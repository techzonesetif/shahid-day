import { useEffect, useRef, useState } from 'react'
import style from './page.module.css'
import { Link } from 'react-router-dom'
import { useParams,useLocation   } from "react-router-dom"

const data=[

  {
    "title": "Renewable Energy Trends",
    "author": "Alice Smith",
    "date": "2023-05-01",
    "image": "https://picsum.photos/800/450?random=1",
    "tags": ["energy", "renewable"],
    "description": "A deep dive into the latest trends in renewable energy.",
    "text": "# Renewable Energy\n\nRenewable energy is transforming the global energy landscape..."
  },
  {
    "title": "Advancements in Solar Technology",
    "author": "Bob Johnson",
    "date": "2023-06-10",
    "image": "https://picsum.photos/800/450?random=2",
    "tags": ["solar", "technology"],
    "description": "Exploring the breakthroughs in solar panel efficiency.",
    "text": "Solar panels are becoming more efficient thanks to new materials and designs."
  },
  {
    "title": "Wind Energy: Harnessing Nature",
    "author": "Carla Diaz",
    "date": "2023-07-20",
    "image": "https://picsum.photos/800/450?random=3",
    "tags": ["wind", "sustainability"],
    "description": "An overview of wind energy and its role in sustainable power.",
    "text": "Wind energy has the potential to power millions of homes."
  },
  {
    "title": "Electric Vehicles and Energy Storage",
    "author": "David Lee",
    "date": "2023-08-05",
    "image": "https://picsum.photos/800/450?random=4",
    "tags": ["electric vehicles", "energy storage"],
    "description": "How electric vehicles are reshaping energy consumption and storage.",
    "text": "Electric vehicles represent a shift towards a cleaner, more efficient future."
  },
  {
    "title": "Hydrogen: The Next Big Thing?",
    "author": "Eva Martinez",
    "date": "2023-09-15",
    "image": "https://picsum.photos/800/450?random=5",
    "tags": ["hydrogen", "innovation"],
    "description": "Investigating hydrogen as a sustainable fuel alternative.",
    "text": "Hydrogen fuel cells could be key in the transition to a sustainable economy."
  },
  {
    "title": "Smart Grids and Future Infrastructure",
    "author": "Frank Zhao",
    "date": "2023-10-10",
    "image": "https://picsum.photos/800/450?random=6",
    "tags": ["smart grid", "infrastructure"],
    "description": "The integration of smart grids into our modern infrastructure.",
    "text": "Smart grids are revolutionizing the way we manage energy distribution."
  },
  {
    "title": "Sustainable Urban Development",
    "author": "Grace Kim",
    "date": "2023-11-01",
    "image": "https://picsum.photos/800/450?random=7",
    "tags": ["urban", "sustainability"],
    "description": "How cities are adapting to sustainable practices.",
    "text": "Urban development is increasingly incorporating green building techniques."
  },
  {
    "title": "Innovations in Energy Efficiency",
    "author": "Henry Adams",
    "date": "2023-12-05",
    "image": "https://picsum.photos/800/450?random=8",
    "tags": ["efficiency", "innovation"],
    "description": "Exploring new innovations that improve energy efficiency across industries.",
    "text": "Energy efficiency improvements are crucial for reducing global consumption."
  },
  {
    "title": "Climate Change and Energy Policy",
    "author": "Ivy Nguyen",
    "date": "2024-01-20",
    "image": "https://picsum.photos/800/450?random=9",
    "tags": ["climate change", "policy"],
    "description": "An analysis of the relationship between climate change and current energy policies.",
    "text": "Policy changes are needed to address the global challenges posed by climate change."
  }
]


export default function ArticlesPage() {
  const location =useLocation()

  useEffect(()=>{console.log(location)

      document.querySelector('body').scrollTo({
        top: 0    })     
        
  })
  return (
    <div className={style.page}>
<Helmet>
  <title>Historical Articles & Archives | Algerian History Resource Center</title>
  <meta name="description" content="Access 500+ scholarly articles, rare documents, and multimedia archives chronicling Algeria's journey from antiquity to modernity." />
  <meta name="keywords" content="Algerian archives, historical documents, research papers, FLN archives, Algerian revolution documents, Berber history" />
  
  {/* Open Graph */}
  <meta property="og:title" content="Historical Articles & Archives | Algerian History Resource Center" />
  <meta property="og:description" content="Explore our extensive collection of primary sources and academic analyses of Algerian history." />
  <meta property="og:image" content="https://https://shahid-day.netlify.app/assets/gallery-preview.jpg" />
  <meta property="og:url" content="https://https://shahid-day.netlify.app/articles" />
  <meta property="og:type" content="article" />
  
  {/* Twitter */}
  <meta name="twitter:title" content="Historical Articles & Archives" />
  <meta name="twitter:description" content="Dive into Algeria's past through curated collections of historical documents and expert analyses" />
  
  {/* Structured Data for Collection Page */}
 
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
          ${data.map((article, index) => `
            {
              "@type": "ListItem",
              "position": ${index + 1},
              "item": {
                "@type": "Article",
                "headline": "${article.title}",
                "description": "${article.description}",
                "author": {
                  "@type": "Person",
                  "name": "${article.author}"
                },
                "datePublished": "${article.date}",
                "image": "${article.image}",
                "keywords": "${article.tags.join(', ')}",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://https://shahid-day.netlify.app/articles/${encodeURIComponent(article.title.toLowerCase().replace(/ /g, '-'))}"
                }
              }
            }
          `).join(',')}
        ]
      }
    `}
  </script>

  {/* Links */}
  <link rel="canonical" href="https://https://shahid-day.netlify.app/articles" />
  <link rel="alternate" type="application/rss+xml" href="https://https://shahid-day.netlify.app/rss/articles" />
</Helmet>

    <aside className={style.side_bar}>
    {/* <Link to={`/article`} className={style.card}>
    Reads
</Link> */}
        <h1>Must Reads</h1>
        <main className={style.article_list}>
          {data.map((e)=>  <Card key={e.title} data={e}/>)}
        </main>
    </aside>
      <Article_preview/>
    </div>
  
  )
}


export function Card({data}){
  const img=useRef(null)
  useEffect(()=>{
    // img.current.style.setProperty('--bg-image', `url(/6348321.jpg)`)
console.log()
  })
  return(
    <>
    <Link to={`/articles/${data?.title?.replace(/\s+/g, '_')}`} className={`${style.card} ${style.card_des}`}>
    <img loading="lazy"  src={data?.image}  ref={img} className={style.card_image} /> 
    <div className={style.card_body}>
    <h1>{data?.title}</h1>
    <p>{data?.description}</p>
    </div>
    </Link>
    <Link to={`/article/${data?.title?.replace(/\s+/g, '_')}`} className={`${style.card} ${style.card_phone}`}>
    <img loading="lazy"  src={data?.image}  ref={img} className={style.card_image} /> 
    <div className={style.card_body}>
    <h1>{data?.title}</h1>
    <p>{data?.description}</p>
    </div>
    </Link>
    </>
    
  )
}



 function Article_preview(){

  const  link = useParams().link;
  // const loadedRef = useRef(false);
  const location =useLocation()
  const [isLoaded, setIsLoaded] = useState(false);
  const [predata,setPredata]=useState({})

  useEffect(()=>{
    setPredata(data.find(acrticle => acrticle.title?.replace(/\s+/g, '_') === link))
  })
  return(
   
    <main className={style.article_preview}>
       {/* <Helmet>
        <title>{predata.title} </title>
        <meta name="description" content={predata.description} />
        <meta name="author" content={predata.author} />
        <meta name="keywords" content={predata.tags.join(", ")} />
        <meta property="og:title" content={predata.title} />
        <meta property="og:description" content={predata.description} />
        <meta property="og:image" content={predata.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={predata.title} />
        <meta name="twitter:description" content={predata.description} />
        <meta name="twitter:image" content={predata.image} />
      </Helmet> */}
      {link&&<>
        <img
      src={predata?.image}
      style={{ filter: isLoaded ? 'blur(0px) grayscale(0%)' : 'blur(10px) grayscale(140%);',
               transition: 'filter .6s' ,
               overflow:'hidden' ,
              
              }}
      onLoad={() => setIsLoaded(true)}
      onError={(e)=>{
        // e.currentTarget.src='/6348321.jpg';
        e.currentTarget.style=`
      background-color: rgb(${Math.random()*150},${Math.random()*150},${Math.random()*150});
        `
        e.currentTarget.onerror=null;
      }}
       className={style.preview_img} />
               <h1>   {predata?.title}</h1>
      <div className={style.preview_body}>
        <div className={style.listag}>
          {predata?.tags?.map(t=><span key={t}>{t}</span>)}
          </div>
        
        <p className={style.preview_text}>
          {predata?.description}
        </p>

      </div>  
      <div className={style.preview_footer}>
      
      <div  className={style.article__author}>
            {/* <img loading="lazy"  src='/6348321.jpg'   className={style.author__avatar} />  */}
            <h4>
            by: {predata?.author}
            </h4>
            <span> {predata?.date}</span>
        </div>
        <Link to={`/article/${predata?.title?.replace(/\s+/g, '_')}`} className={style.button}>
            read more      
        </Link>
</div>
      </>
      }
      
      </main>
  )
}

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet'
Card.propTypes = {
  data: PropTypes.any, 
};
Article_preview.propTypes = {
  data: PropTypes.any, 
};