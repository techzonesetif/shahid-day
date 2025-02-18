
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



import { useEffect, useState,  useMemo, memo } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import style from './page.module.css';
import PropTypes from 'prop-types';


const MemoizedHelmet = memo(() => (
  <Helmet>
    <title>Historical Articles & Archives | Algerian History Resource Center</title>
    <meta name="description" content="Access 500+ scholarly articles, rare documents, and multimedia archives chronicling Algeria's journey from antiquity to modernity." />
    <meta name="keywords" content="Algerian archives, historical documents, research papers, FLN archives, Algerian revolution documents, Berber history" />
    
    <meta property="og:title" content="Historical Articles & Archives | Algerian History Resource Center" />
    <meta property="og:description" content="Explore our extensive collection of primary sources and academic analyses of Algerian history." />
    <meta property="og:image" content="https://shahid-day.netlify.app/assets/gallery-preview.jpg" />
    <meta property="og:url" content="https://shahid-day.netlify.app/articles" />
    <meta property="og:type" content="article" />
    
    <meta name="twitter:title" content="Historical Articles & Archives" />
    <meta name="twitter:description" content="Dive into Algeria's past through curated collections of historical documents and expert analyses" />
    
    <link rel="canonical" href="https://shahid-day.netlify.app/articles" />
    <link rel="alternate" type="application/rss+xml" href="https://shahid-day.netlify.app/rss/articles" />
  </Helmet>
));
MemoizedHelmet.displayName = 'MemoizedHelmet';

const Card = memo(({ data }) => {
  const articleUrl = useMemo(
    () => `${data?.title?.replace(/\s+/g, '_')}`,
    [data?.title]
  );

  return (
    <>
        <Link to={`/articles/${articleUrl}`} className={`${style.card} ${style.card_des}`}>
        <img 
        loading="lazy" 
        src={data?.image} 
        className={style.card_image} 
        alt={data?.title}
      />
      <div className={style.card_body}>
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>
      </div>
    </Link>
    <Link to={`/article/${articleUrl}`} className={`${style.card} ${style.card_phone}`}>
      <img 
        loading="lazy" 
        src={data?.image} 
        className={style.card_image} 
        alt={data?.title}
      />
      <div className={style.card_body}>
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>
      </div>
    </Link>
    </>

  );
});

Card.displayName = 'Card';
Card.propTypes = {
  data:PropTypes.any, 
};
const ArticlePreview = memo(() => {
  const { link } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  const predata = useMemo(
    () => data.find(article => article.title?.replace(/\s+/g, '_') === link),
    [link]
  );

  return (
    <main className={style.article_preview}>
      {link && (
        <>
          <img
            src={predata?.image}
            className={`${style.preview_img} ${isLoaded ? style.loaded : ''}`}
            onLoad={() => setIsLoaded(true)}
            alt={predata?.title}
          />
          <h1>{predata?.title}</h1>
          <div className={style.preview_body}>
            <div className={style.listag}>
              {predata?.tags?.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p className={style.preview_text}>{predata?.description}</p>
          </div>
          <div className={style.preview_footer}>
            <div className={style.article__author}>
              <h4>by: {predata?.author}</h4>
              <span>{predata?.date}</span>
            </div>
            <Link 
              to={`/article/${predata?.title?.replace(/\s+/g, '_')}`} 
              className={style.button}
            >
              Read more
            </Link>
          </div>
        </>
      )}
    </main>
  );
});
ArticlePreview.displayName = 'ArticlePreview';
 
export default function ArticlesPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const structuredData = useMemo(() => JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": data.map((article, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": article.title,
        "description": article.description,
        "author": { "@type": "Person", "name": article.author },
        "datePublished": article.date,
        "image": article.image,
        "keywords": article.tags.join(', '),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://shahid-day.netlify.app/articles/${encodeURIComponent(article.title.toLowerCase().replace(/ /g, '-'))}`
        }
      }
    }))
  }), []);

  return (
    <div className={style.page}>
      <MemoizedHelmet>
        <script type="application/ld+json">
          {structuredData}
        </script>
      </MemoizedHelmet>

      <aside className={style.side_bar}>
        <h1>Must Reads</h1>
        <main className={style.article_list}>
          {data.map(article => (
            <Card key={article.title} data={article} />
          ))}
        </main>
      </aside>
      <ArticlePreview />
    </div>
  );
}