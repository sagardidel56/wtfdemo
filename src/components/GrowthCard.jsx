import React from 'react'

export default function GrowthCard() {
    return (
        <section className='growth_card my-5'>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 mb-xl-0 mb-4">
                            <div className="card h-100">
                                <div className="card-body p-4">
                                    <h5 className="card-title text-white mb-4 fw-normal d-flex align-items-center gap-3 fs-4"><i className="fa-solid fa-paper-plane"></i> Self onboarding</h5>
                                    <p className="card-text fs-6 text-white lh-sm">Self onboard in just 30 minutes and start growing your business from Day 1</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-xl-0 mb-4">
                            <div className="card h-100">
                                <div className="card-body p-4">
                                    <h5 className="card-title text-white mb-4 fw-normal d-flex align-items-center gap-3 fs-4"><img src="../assets/images/bar-chart.svg" alt="" className='card_icon' />Business Growth</h5>
                                    <p className="card-text fs-6 text-white lh-sm">Get 2x revenue jump through WTF channels, OTAS & AI enabled pricing</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-xl-0 mb-4">
                            <div className="card h-100">
                                <div className="card-body p-4">
                                    <h5 className="card-title text-white mb-4 fw-normal d-flex align-items-center gap-3 fs-4"><img src="../assets/images/gear.svg" alt="" className='card_icon' />Easy Operations</h5>
                                    <p className="card-text fs-6 text-white lh-sm">Manage inventory, access bookings in real-time and seek support from WTF Partner Suite</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
