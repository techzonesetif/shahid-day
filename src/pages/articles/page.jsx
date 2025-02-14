import { useEffect, useRef, useState } from 'react'
import style from './page.module.css'
import { Link } from 'react-router-dom'


export default function ArticlesPage() {
  const ex=Array.from(Array(10).keys(1))
  useEffect(()=>{
console.log(ex)

  })
  return (
    <div className={style.page}>
    <aside className={style.side_bar}>
    <Link to={`/article`} className={style.card}>
    Reads
</Link>
        <h1>Must Reads</h1>
        <main className={style.article_list}>
          {ex.map((e)=>  <Card key={e} data={e}/>)}
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

    <Link to={`/article/${data}`} className={style.card}>
    <img loading="lazy"  src='/6348321.jpg'  ref={img} className={style.card_image} /> 
    <div className={style.card_body}>
    <h1> test {data}</h1>
    <p>Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.</p>
    </div>
</Link>
  )
}


import { useParams,useLocation   } from "react-router-dom"

 function Article_preview(){

  const  link = useParams().link;
  // const loadedRef = useRef(false);
  const location =useLocation()
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(()=>{
console.log(location)
  })
  return(
   
    <main className={style.article_preview}>
      {link&&<>
        <img
      src="https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg"
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
               <h1> يوم الشهيد {link}</h1>
      <div className={style.preview_body}>
        <div className={style.listag}>
          <span>shaid</span>
          <span>shaid</span>
          <span>shaid</span>
          </div>
        
        <p className={style.preview_text}>
            Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

      </div>  
      <div className={style.preview_footer}>
      
      <div  className={style.article__author}>
            {/* <img loading="lazy"  src='/6348321.jpg'   className={style.author__avatar} />  */}
            <h4>
            by:  mounir habbas
            </h4>
            <span> 12/04/2025</span>
        </div>
        <Link to={`/article/123`} className={style.button}>
            read more      
        </Link>
</div>
      </>
      }
      
      </main>
  )
}

import PropTypes from 'prop-types';
Card.propTypes = {
  data: PropTypes.any, 
};
Article_preview.propTypes = {
  data: PropTypes.any, 
};