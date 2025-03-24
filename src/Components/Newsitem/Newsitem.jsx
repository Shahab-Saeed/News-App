import React from 'react'
import image from "../../../public/download.jpg"
const Newsitem = (props) => {
  return (
    <div className="px-2 py-2 mx-3 my-3 mb-3 card bg-dark text-light d-inline-block" style={{maxWidth:"310px"}}>
    <img src={props.src ?  props.src : image} style={{height:"200px", width:"290px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title.slice(0,20)}</h5>
      <p className="card-text">{props.description ? props.description.slice(0,50) : "rowse through our curated collection of breaking news"}</p>
      <a href={props.url} className="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}

export default Newsitem
