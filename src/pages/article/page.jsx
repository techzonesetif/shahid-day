import { useEffect, useRef, useState } from 'react'
import style from './page.module.css'
import { Link } from 'react-router-dom'
import Styledmarkdown from '../../components/markdown/Styledmarkdown'


export default function Article() {
  const ex=Array.from(Array(10).keys(1))
  useEffect(()=>{
console.log(ex)

  })
  const mark=` 
# Introduction to Programming: Key Concepts and Tools

Programming is the backbone of modern technology. Whether you're building apps, analyzing data, or automating tasks, coding skills are essential. Below, we’ll explore core concepts with **Arabic examples** for clarity.

---

## Why Learn Programming? الأهمية

Here are three reasons to start coding today:
1. **Problem Solving**: Break down complex issues into logical steps.
2. **Creativity**: Build anything from websites to AI models.
3. **Career Growth**: High demand for developers worldwide.

> "التعليم هو أقوى سلاح يمكنك استخدامه لتغيير العالم." — نيلسون مانديلا  
*(Translation: "Education is the most powerful weapon to change the world.")*

---

### Common Programming Languages

| اللغة       | الاستخدام              | Difficulty |
|-------------|-----------------------|------------|
| Python      | AI, Data Science      | Easy       |
| JavaScript  | Web Development       | Moderate   |
| C++         | Game Development      | Hard       |

---

## Arabic Code Examples

\`\`\`python
# طباعة جملة بالعربية  
print("مرحبا بالعالم!")  # Output: مرحبا بالعالم!
\`\`\`

\`\`\`javascript
// عرض رسالة بالعربية  
console.log("البرمجة ممتعة!"); // Output: البرمجة ممتعة!
\`\`\`

---

### Arabic-Inspired Practice Projects

1. إنشاء آلة حاسبة بسيطة (Build a simple calculator).
2. تطبيق قائمة مهام (Develop a to-do list app).
3. تحليل بيانات باللغة العربية (Analyze Arabic text data).

---

## Test Images with Arabic Text

![Arabic Code Example](https://via.placeholder.com/600x300.png?text=كود+برمجي+عربي)  
*Placeholder image with Arabic text: "كود برمجي عربي" (Arabic Code)*

![Data Graph](https://via.placeholder.com/600x300.png?text=تحليل+البيانات+بالعربية)  
*Placeholder image: "تحليل البيانات بالعربية" (Data Analysis in Arabic)*

---

## Resources for Learning
- [Codecademy](https://www.codecademy.com) (English)
- [منصة حسوب](https://academy.hsoub.com) (Arabic)
- [FreeCodeCamp Arabic](https://www.freecodecamp.org/arabic/)

\`\`\`
**Tip**: Use \`print()\`, \`console.log()\`, or \`System.out.println()\` to debug your code!
\`\`\`

`
  return (
    <div className={style.page}>

       <article className={style.article_container}>
        
        <header className={style.article_header}>
            <img src="https://picsum.photos/800/450" alt="Sustainable energy" className={style.article_image}/>
            <h1 className={style.article_title}>The Future of Sustainable Energy</h1>
            <div className={style.article_tags}>
                        <span>tag</span> 
                        <span>tag</span> 
                        <span>tag</span> 
        </div>
        </header>

       {/* <h1>Must Reads</h1> */}
        <Styledmarkdown >
            {mark}
        </Styledmarkdown>
        <div className={style.article_meta}>
                        <div>By <span>John Doe</span></div> 
                        <span>April 15, 2023</span> 
        </div>
       </article>
       
    </div>
  
  )
}



