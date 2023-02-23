import React from 'react'

function Hero() {
  return (
    <div className="container col-xxl-8 px-4  " style={{
      marginTop: 110,
    }}>
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6"

      
      >
        <img src="next.svg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3 " style={{
          fontFamily: 'cursive',
          color: '#339ef4'
        }}>Welcome to Next js project website.</h1>
        <p className="lead subtitle">Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.React is a JavaScript library that is traditionally used to build web </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="p-btn">See More</button>
          <button type="button" className="p-btn-o mx-3">Contact me</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero