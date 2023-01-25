import React from 'react'
import ellipse1238 from "../Assets/Ellipse 1238.png"
import note4 from "../Assets/note 4.png"

const Profile = () => {
    return (
        <div className='col-md-3 mt-4'>
            <div className='profile-img d-flex justify-content-center mb-3'>
                <img src={ellipse1238} alt="" />
            </div>
            <p className='text-center mb-0' style={{ fontSize: "24px", fontWeight: "700" }}>Diane Cooper</p>
            <p className='text-center mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>diane.cooper@example.com</p>
            <div className=' col-12 d-flex justify-content-center mt-2'>
                <div className='col-4 ps-4 ' style={{ borderRight: "1px solid #6B6B6B" }}>
                    <p className='mb-0' style={{ fontSize: "20px", fontWeight: "400" }}>15</p>
                    <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Past</p>
                </div>
                <div className='col-4  ps-4'>
                    <p className='mb-0 text-center' style={{ fontSize: "20px", fontWeight: "400" }}>02</p>
                    <p className='mb-0 text-center' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Upcoming</p>
                </div>
            </div>
            <div className='container my-4'>
                <button className='btn col-12 border' style={{ fontSize: "14px", fontWeight: "500", fontFamily: "Source Serif 4" }}>Send Message</button>
            </div>
            <div className='container file-doc-container'>
                <p className='ms-1  my-4'>Files / Documents</p>
                <div className='d-flex align-items-center ps-4 py-3 mb-2' style={{backgroundColor:"#F9F9F9"}}>
                    <img src={note4} alt="" />
                    <p className='mb-0 ms-3'>Check Up Results.pdf</p>
                </div>
                <div className='d-flex align-items-center ps-4 py-3 mb-2' style={{backgroundColor:"#F9F9F9"}}>
                    <img src={note4} alt="" />
                    <p className='mb-0 ms-3'>Check Up Results.pdf</p>
                </div>
                <div className='d-flex align-items-center ps-4 py-3 mb-2' style={{backgroundColor:"#F9F9F9"}} >
                    <img src={note4} alt="" />
                    <p className='mb-0 ms-3'>Medical Prescription.pdf</p>
                </div>
                <div className='d-flex align-items-center ps-4 py-3 mb-2' style={{backgroundColor:"#F9F9F9"}} >
                    <img src={note4} alt="" />
                    <p className='mb-0 ms-3'>Dental X-Ray Result.pdf</p>
                </div>
            </div>
        </div>
    )
}

export default Profile