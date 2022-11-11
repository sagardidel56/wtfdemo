import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid bg-theme2 pt-5 main_footer">
                <div className="container pb-5">
                    <div className="row ">
                        <div className="col-lg-3 col-12 text-start mb-lg-0 mb-4">
                            <div className="mb-3 d-flex justify-content-lg-start justify-content-center"><div className=""><img src="../assets\images\logo.jpg" alt width="auto"  className="d-inline-block align-text-top h-sm-60 h-55" /></div></div>
                            <div className="social_part d-flex align-items-center justify-content-lg-start justify-content-center gap-3 mb-3">
                                <a href="javascript:;" className="inner_cart inner_cart1 d-flex align-items-center justify-content-center text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="top" title="instagram"><i className="fa-brands fa-instagram insta fs-5"></i></a>
                                <a href="javascript:;" className="inner_cart inner_cart2 d-flex align-items-center justify-content-center text-decoration-none"><i className="fa-brands fa-facebook-f  fb fs-5"></i></a>
                                <a href="javascript:;" className="inner_cart inner_cart3 d-flex align-items-center justify-content-center text-decoration-none"><i className="fa-brands fa-linkedin-in  linkd fs-5"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 text-start mb-lg-0 mb-4">
                            <div className="fs-md-20 fs-4 footer_heading fw-bold text-white mb-sm-4 mb-3">Quick Links</div>
                            <ul className="quick_link p-0 fs-md-16 fs-14">
                                <li className="mb-2 inner_link"><a href="" className="inner_links text-decoration-none">About</a></li>
                                <li className="mb-2 inner_link"><a href="" className="inner_links text-decoration-none">FAQs</a></li>
                                <li className="mb-2 inner_link"><a href="" className="inner_links text-decoration-none">Privacy Policy</a></li>
                                <li className="mb-2 inner_link"><a href="" className="inner_links text-decoration-none">WTF in News</a></li>
                                <li className="mb-2 inner_link"><a href="" className="inner_links text-decoration-none">Terms &amp; Conditions</a></li>
                                <li className="mb-2 inner_link"><a href="" className="inner_links text-decoration-none">Refund &amp; Cancellation</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-6 text-start mb-lg-0 mb-4">
                            <div className="fs-md-20 fs-4 footer_heading fw-bold text-white mb-sm-4 mb-3">Explore</div>
                            <ul className="quick_link p-0 fs-md-16 fs-14">
                                <li className="mb-2 inner_link"><a href="" className="inner_links text-decoration-none">Arenas</a></li>
                                <li className="mb-2 inner_link"><a href="" className="inner_links text-decoration-none">Studios</a></li>
                                <li className="mb-2 inner_link"><a href="" className="inner_links text-decoration-none">Nutrition</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-12 text-start mb-lg-0 mb-4 contactus">
                            <div className="fs-md-20 fs-4 footer_heading fw-bold text-white mb-sm-4 mb-3">Contact</div>
                           <div className="content d-flex mb-3"><i class="fa-solid fa-location-dot text-white mt-sm-2 me-3"></i> Ro: S1502, Amrapali Silicon city, Sector 76, Noida, Uttar Pradesh, India</div>
                           <div className="content d-flex mb-3"><i class="fa-solid fa-location-dot text-white mt-sm-2 me-3"></i> Ro: S1502, Amrapali Silicon city, Sector 76, Noida, Uttar Pradesh, India</div>
                           <div class="mb-3"><a href="tel:+919090639005" class="content text-decoration-none"><i class="fa-solid fa-phone me-3 text-white"></i>+919090639005</a></div>
                           <div class="mb-3"><a href="mailto: support@wtfup.me" class="content text-decoration-none"><i class="fa-solid fa-envelope me-3 text-white"></i>support@wtfup.me</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        


    )
}
