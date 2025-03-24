import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>SHA News</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
         
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>props.setCatagory("technology")}>Technology</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>props.setCatagory("business")}>Business</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>props.setCatagory("health")}>Health</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>props.setCatagory("science")}>Science</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>props.setCatagory("sports")}>Sports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>props.setCatagory("entertainment")}>Entertainment</a>
          </li>
      
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
