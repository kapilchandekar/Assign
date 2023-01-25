import React from 'react'
import "../SideBar/SideBar.css"
import hl from "../Assets/Vector 771 (Stroke).png"
import plus from "../Assets/+.png"
import img897 from "../Assets/image 897.png"
import img898 from "../Assets/image 898.png"
import img899 from "../Assets/image 899.png"
import img900 from "../Assets/image 900.png"
import img901 from "../Assets/image 901.png"
import img902 from "../Assets/image 902.png"

const SideBar = () => {
    return (
        <div className='col-md-1' style={{height:"681px"}}>
            <nav class="navbar d-block py-0">
                <div className=' header-logo d-flex justify-content-center align-items-center' style={{ backgroundColor: "#29B712", height: "71px" }}>
                    <img src={hl} alt="" />
                </div>
                <div class="" id="navbarNav">
                    <ul class="navbar-nav" style={{borderRight:"1px solid #ECECEC"}}>
                        <li class="nav-item d-flex justify-content-center align-items-center flex-column ">
                            <img src={plus} />
                            <a class="nav-link active" style={{ fontWeight: "400", fontSize: "10px", color: "rgba(0, 0, 0, 0.3)" }} aria-current="page" href="#">NEW </a>
                        </li>
                        <li class="nav-item d-flex justify-content-center align-items-center flex-column " >
                            <img src={img897} />
                            <a class="nav-link active" style={{ fontWeight: "400", fontSize: "10px", color: "rgba(0, 0, 0, 0.3)" }} aria-current="page" href="#">PATIENT</a>
                        </li>
                        <li class="nav-item d-flex justify-content-center align-items-center flex-column ">
                            <img src={img898} />
                            <a class="nav-link active" style={{ fontWeight: "400", fontSize: "10px", color: "rgba(0, 0, 0, 0.3)" }} aria-current="page" href="#">FOLDER</a>
                        </li>
                        <li class="nav-item d-flex justify-content-center align-items-center flex-column ">
                            <img src={img899} />
                            <a class="nav-link active" style={{ fontWeight: "400", fontSize: "10px", color: "rgba(0, 0, 0, 0.3)" }} aria-current="page" href="#"> UPLOAD</a>
                        </li>
                        <li class="nav-item d-flex justify-content-center align-items-center flex-column ">
                            <img src={img900} />
                            <a class="nav-link active" style={{ fontWeight: "400", fontSize: "10px", color: "rgba(0, 0, 0, 0.3)" }} aria-current="page" href="#"> REPORT</a>
                        </li>
                        <li class="nav-item d-flex justify-content-center align-items-center flex-column ">
                            <img src={img901} />
                            <a class="nav-link active" style={{ fontWeight: "400", fontSize: "10px", color: "rgba(0, 0, 0, 0.3)" }} aria-current="page" href="#"> SETTING</a>
                        </li>
                        <li class="nav-item d-flex justify-content-center align-items-center flex-column ">
                            <img src={img902} />
                            <a class="nav-link active" style={{ fontWeight: "400", fontSize: "10px", color: "rgba(0, 0, 0, 0.3)" }} aria-current="page" href="#">   LOGOUT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default SideBar