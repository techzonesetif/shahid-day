/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
<<<<<<< HEAD
  import React, { useCallback, useMemo, useState } from 'react';
  import Style from './Markdown.module.css';
  import Markdown from 'react-markdown';
  import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
  import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
  
  const CodeBlock = ({ className, children }) => {
    const [copied, setCopied] = useState(false);
    const language = useMemo(
      () => /language-(\w+)/.exec(className || 'language-bash')?.[1] || 'bash',
      [className]
    );
  
    const handleCopy = useCallback(() => {
      navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
      setCopied(true);
      setTimeout(() => setCopied(false), 700);
    }, [children]);
  
    return (
      <div className={Style.codeWrapper}>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          PreTag="div"
          className={Style.codeBlock}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
        <button 
          onClick={handleCopy}
          className={Style.copyButton}
          aria-label={copied ? "Code copied" : "Copy code"}
        >
          {copied ? '✅' : '📋'}
          {/* <span style="color:rgb(92, 248, 60)">copied</span> */}
          {/* {copied ?  : 'copie'} */}
        </button>
      </div>
    );
  };
  
  const CustomParagraph = ({ children }) => {
    const processedChildren = useMemo(() => {
      return React.Children.map(children, child => {
        if (typeof child === 'string') {
          const sliderMatch = child.match(/slidermark{(.*?)}/i);
          if (sliderMatch) {
            const srcs = sliderMatch[1].split(',');
            return <Slidermark key={sliderMatch[0]} srcs={srcs} />;
          }
  
          const mcMatch = child.match(/MC{(.*?)}/i);
          if (mcMatch) {
            return <div className={Style.mcContainer}>{child.replace(mcMatch[0], '')}</div>;
          }
        }
        return child;
      });
    }, [children]);
  
    return <p dir="auto">{processedChildren}</p>;
  };
  
  const Slidermark = ({ srcs }) => {
    return (
      <div className={Style.viewer}>
        {srcs.map((e, i) => (
          <ImageWithFallback key={i} src={e} />
        ))}
      </div>
    );
  };
  
  const ImageWithFallback = ({ src }) => {
    const [error, setError] = useState(false);
    const bgColor = useMemo(
      () => `rgb(${Math.random()*150},${Math.random()*150},${Math.random()*150})`,
      []
    );
  
    if (error) {
      return <div className={Style.imageFallback} style={{ backgroundColor: bgColor }} />;
    }
  
    return (
      <img
        src={`https://lh3.googleusercontent.com/d/${src}`}
        onError={() => setError(true)}
        alt="Content preview"
        loading="lazy"
      />
    );
  };
  
  export default function StyledMarkdown({ children }) {
    const components = useMemo(() => ({
      code: CodeBlock,
      p: CustomParagraph,
    }), []);
  
    return (
      <div className={Style.Markdown} dir="auto">
        <Markdown components={components}>
          {children}
        </Markdown>
      </div>
    );
  }
=======
import Style from './Markdown.module.css'
import { useEffect,useRef, useState } from 'react'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';





import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

import ReactDOM from 'react-dom/client'




export default function Styledmarkdown({props,children}){
  const markdown = useRef(null);
  const [markdo,setMarkdo]=useState('')
useEffect(()=>{
      let code=document.querySelectorAll('.code')
      let allrt=document.querySelectorAll(' pre')
      setMarkdo(markdown.current.classList[0])
      // console.log(markdo)
      code.forEach((ele)=>{
        ele.style.position="relative"
        ele.innerHTML += `<span class="${Style.Copie}">copie<span>`;
        ele.childNodes[1].addEventListener('click', function (e) {
          navigator.clipboard.writeText(ele.childNodes[0].innerText)
          ele.childNodes[1].innerHTML = `<span style="color:rgb(92, 248, 60)">copied<span>`
          setTimeout(()=>ele.childNodes[1].innerHTML = `copie`,700)
        }) 
      })
})

useEffect(()=>{
if (markdo) {
  let content=document.querySelectorAll(`.${markdo} > *`)
  content.forEach((e)=>{ e.setAttribute("dir", "auto");})
  content.forEach((e)=>{  
   
    if ( e.tagName =='P') {
if (e.innerText.includes("slidermark{")) {
  e.setAttribute("markcalss", e.innerText.match(/slidermark{(.*?)}/i)[1] )
  let rea=e.innerText.match(/slidermark{(.*?)}/i)[1].split(',')
  ReactDOM.createRoot(e).render(<Slidermark srcs={rea}/>)
}
}
    if ( e.tagName =='P') {
if (e.innerText.includes("MC{")) {
  e.setAttribute("markcalss", e.innerText.match(/MC{(.*?)}/i)[1] )
 e.innerText= e.innerText.replace(/MC{.*}/,'' )
}
}
  })
}
},[markdo,children])


return(
  <div   ref={markdown}    className={Style.Markdown}  >

  <Markdown 
  contentEditable="true"
    children={children}
    components={{
      code(props) {
        const {children, className, node, ...rest} = props
        const match = /language-(\w+)/.exec(className?className:'language-bash' )
        return match ? (
        <SyntaxHighlighter 
        className="code"

            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            // style={docco}
            style={vscDarkPlus}
            
        />
        ) : (
        <code    {...rest} className={className}>
            {children}
        </code>
        )
      }
    }}
    
  />
  </div>
)
}





  function Slidermark({srcs}){
  return(
    <>
      <div className={Style.viewer} >
      {srcs.map((e,i)=><img
                        key={i} src={`https://lh3.googleusercontent.com/d/${e}`} 
                        onError={(e)=>{
                          // e.currentTarget.src='/6348321.jpg';
                          e.currentTarget.style=`
                        background-color: rgb(${Math.random()*150},${Math.random()*150},${Math.random()*150});
                          `
                          e.currentTarget.onerror=null;
                        }}
                        />)}
      </div>

    </>
  )
  
  }
>>>>>>> 50739977a8a6d27ebc94dc04a3d98f98422cc9b8
