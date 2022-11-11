import React from 'react'

function Navbar() {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-dark bg-black " aria-label="Fourth navbar example">
  <div className="container">
    <a className="navbar-brand" href="#"><button class="btn ps-2 toogal_icon d-lg-none dblock" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><img src="../assets/images/grid-fill.svg" alt="" /></button><img src='../assets\images\logo.jpg' className='w-100 logo_img' /></a>
    <button className="btn login_btn shadow-none border-none d-lg-none d-block">Login</button>
    <div className="collapse navbar-collapse" id="navbarsExample04">
      <ul className="navbar-nav ms-auto mb-2 mb-md-0 gap-5 align-items-center">
        <li className="nav-item"><a className="nav-link" href="#">Fitness</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Nutrition</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Gyms</a></li>
        <li className="nav-item"><a className="nav-link active" href="#">Become WTF Partner</a></li>
        <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
        <li><button className="btn login_btn shadow-none border-none">Login</button></li>
      </ul>
    </div>
  </div>
</nav>


{/* offcanvas */}
{/* <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a> */}

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 claclassNamess="offcanvas-title" id="offcanvasExampleLabel"></h5>
    <button type="button" class="btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark text-white fs-2"></i></button>
  </div>
  <div class="offcanvas-body">
   <div className="row">
    <div className="col-12 d-flex justify-content-between align-items-center offcanvasBtn"><div className=""><a href="" className='text-white fs-4 text-decoration-none'>Login</a><a href="" className='text-white fs-4 text-decoration-none'>/Signup</a></div><button className="btn bg-white btn-sm shadow-none border-none">Login</button></div>

    <div className="col-12 mt-3 row mx-0 align-items-center">
      <div className="col d-flex align-items-center gap-2"><img src="../assets/images/clink_1.jpg" alt="" className="links_imagess" /><span className='ofcanwas_links text-gray'>Fitness</span></div>
      <div className="col-auto"><i className="fa-solid fa-angle-right text-white arrow_icon"></i></div>
    </div>
    <div className="col-12 mt-3 row mx-0 align-items-center">
      <div className="col d-flex align-items-center gap-2"><img src="../assets/images/clink_2.jpg" alt="" className="links_imagess" /><span className='ofcanwas_links text-gray'>Nutrition</span></div>
      <div className="col-auto"><i className="fa-solid fa-angle-right text-white arrow_icon"></i></div>
    </div>
    <div className="col-12 mt-3 row mx-0 align-items-center">
      <div className="col d-flex align-items-center gap-2"><img src="../assets/images/clink_3.jpg" alt="" className="links_imagess" /><span className='ofcanwas_links text-gray'>Gyms</span></div>
      <div className="col-auto"><i className="fa-solid fa-angle-right text-white arrow_icon"></i></div>
    </div>
    <div className="col-12 mt-3 row mx-0 align-items-center">
      <div className="col d-flex align-items-center gap-2"><img src="../assets/images/clink_4.jpg" alt="" className="links_imagess" /><span className='ofcanwas_links text-gray'>Become WTF Partner</span></div>
      <div className="col-auto"><i className="fa-solid fa-angle-right text-white arrow_icon"></i></div>
    </div>
    <div className="col-12 mt-3 row mx-0 align-items-center">
      <div className="col d-flex align-items-center gap-2"><img src="../assets/images/clink_5.jpg" alt="" className="links_imagess" /><span className='ofcanwas_links text-gray'>About Us</span></div>
      <div className="col-auto"><i className="fa-solid fa-angle-right text-white arrow_icon"></i></div>
    </div>
    <div className="col-12 mt-3 row mx-0 align-items-center">
      <div className="col d-flex align-items-center gap-2"><img src="../assets/images/clink_6.jpg" alt="" className="links_imagess" /><span className='ofcanwas_links text-gray'>Login/signup</span></div>
      <div className="col-auto"><i className="fa-solid fa-angle-right text-white arrow_icon"></i></div>
    </div>
   </div>
  </div>
</div>
</>



  )
}

export default Navbar