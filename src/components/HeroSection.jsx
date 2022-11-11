import React from 'react'

export default function HeroSection() {
  return (
    <section className='hero_section py-5'>
        <div className="container-fluid">
            <div className="container">
                <div className="row align-items-center">
                     <div className="col-lg-6 col-12 left_side row mx-0 mb-lg-0 mb-5">
                        <div className='col-12'><h1  className="fw-bold heading text-white">WANT TO GROW YOUR <span className='inner_heading'>FITNESS</span> BUSINESS?</h1></div>
                        <div className="col-12 fs-5 mb-4 average_time">we made it easy for you,be a part of WTF Family in just about 45 mins, that is also the time average person works-out in the GYM too.</div>
                        <div className="col-sm-auto text-sm-start text-center"><button className="btn btn_hero login_btn shadow-none border-none px-5 py-3 fs-4">Get Started</button></div>
                     </div>
                     <div className="col-lg-6 col-12 right_side row mx-0">
                        <div className="col-12 d-flex justify-content-center align-items-center"><img src='../assets/images/hero_section.jpg' className="w-100"/></div>
                     </div>
                </div>
            </div>
        </div>
    </section>
  )
}
