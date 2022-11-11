import React from 'react'

export default function OurClients() {
    return (
        <section className='ourclients_section  py-5'>
            <div className="container-fluid ">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12">
                            <h2 className='fw-bold text-white heading_2'>Our Clients</h2>
                            <h2 className='fw-bold text-white heading_2'>have witnessed</h2></div>
                    </div>
                    <div className="row scrool_Row">
                        <div className="col-md-4 mb-md-0 mb-4">
                            <div className="d-flex justify-content-center align-items-center"><img src='../assets/images/circle_1.jpg' className=""/></div>
                            <div className="text-center fs-4 text-white mt-3">increase in revenue</div>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-4">
                            <div className="d-flex justify-content-center align-items-center"><img src='../assets/images/circle_2.jpg' className=""/></div>
                            <div className="text-center fs-4 text-white mt-3">increase in sales</div>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-4">
                            <div className="d-flex justify-content-center align-items-center"><img src='../assets/images/circle_3.jpg' className=""/></div>
                            <div className="text-center fs-4 text-white mt-3">increase in Physical</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
