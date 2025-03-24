import React, { useEffect } from 'react'
import { useState } from 'react'
import Newsitem from '../Newsitem/Newsitem'

const Newsboard = (props) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory}&apiKey=${import.meta.env.VITE_API_KEY}`
    fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
   
  }, [props.catagory])
  
  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
        <div style={{display:"flex" ,  flexDirection:"row" ,  gap:"40px", flexWrap:"wrap", justifyContent:"center"}}>
        {articles.map((news,index)=>{
          return <Newsitem key={index} title={news.title} description ={news.description} src={news.urlToImage} url={news.url}/>
        })}
        </div>
    </div>
  )
}

export default Newsboard
