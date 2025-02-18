import { useEffect, useState,  } from 'react'
import style from './page.module.css'
import { useParams } from 'react-router-dom'
import Styledmarkdown from '../../components/markdown/Styledmarkdown'
import { Helmet } from 'react-helmet'
<<<<<<< HEAD
import { data } from '../data/articles'
=======
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
>>>>>>> 50739977a8a6d27ebc94dc04a3d98f98422cc9b8

export default function Article() {
  const  link = useParams().link;
  // const loadedRef = useRef(false);
  const [article,setArticle]=useState(data.find(acrticle => acrticle.title?.replace(/\s+/g, '_') === link))

  useEffect(()=>{
    setArticle(data.find(acrticle => acrticle.title?.replace(/\s+/g, '_') === link))
    document.querySelector('body').scrollTo({top: 0})     

  },[link])

  return (
    <div className={style.page}>
 <Helmet>
        <title>{article.title} </title>
        <meta name="description" content={article.description} />
        <meta name="author" content={article.author} />
        <meta name="keywords" content={article?.tags?.join(",")} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={article.image} />
      </Helmet>
       <article className={style.article_container}>
        
        <header className={style.article_header}>
            <img src={article?.image} alt="Sustainable energy" className={style.article_image}/>
            <h1 className={style.article_title}>{article?.title}</h1>
            <div className={style.article_tags}>
              {article?.tags?.map(t=><span key={t}>{t}</span>)}
            </div>
        </header>
        <Styledmarkdown >
            {article?.text}
<<<<<<< HEAD
           
=======
>>>>>>> 50739977a8a6d27ebc94dc04a3d98f98422cc9b8
        </Styledmarkdown>
        <div className={style.article_meta}>
            <div>By <span>{article?.author}</span></div> 
            <span>{article?.date}</span> 
        </div>
       </article>
       
    </div>
  
  )
}



