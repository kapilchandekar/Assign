import React from 'react'
import note2 from "../Assets/note 2.png"

const ProfileDetails = () => {
    return (
        <div className='col-md-9 px-5 pt-5'>
            <div className='personel-details-container'>
                <div className='c1 d-flex justify-content-between mb-3'>
                    <div className='gender-container col-2'>
                        <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Gender</p>
                        <p className='mb-0 pb-2' style={{ fontSize: "14px", fontWeight: "400", borderBottom: "1px solid rgb(107, 107, 107, .2)" }}>Female</p>
                    </div>
                    <div className='gender-container col-2'>
                        <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Birthday</p>
                        <p className='mb-0 pb-2' style={{ fontSize: "14px", fontWeight: "400", borderBottom: "1px solid rgb(107, 107, 107, .2)" }}>Feb 24th, 1997</p>
                    </div>
                    <div className='gender-container col-2'>
                        <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Phone Number</p>
                        <p className='mb-0 pb-2' style={{ fontSize: "14px", fontWeight: "400", borderBottom: "1px solid rgb(107, 107, 107, .2)" }}>(239) 555 -0108</p>
                    </div>
                    <div className='gender-container col-2'>
                        <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Registered Date</p>
                        <p className='mb-0 pb-2' style={{ fontSize: "14px", fontWeight: "400", borderBottom: "1px solid rgb(107, 107, 107, .2)" }}>Feb 24th, 1997</p>
                    </div>
                </div>
                <div className='c2  d-flex justify-content-between mb-4'>
                    <div className='gender-container col-2'>
                        <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Street Address</p>
                        <p className='mb-0 pb-2 text-nowrap' style={{ fontSize: "14px", fontWeight: "400", borderBottom: "1px solid rgb(107, 107, 107, .2)" }}>JL. Diponegoro No. 21</p>
                    </div>
                    <div className='gender-container col-2'>
                        <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>City</p>
                        <p className='mb-0 pb-2' style={{ fontSize: "14px", fontWeight: "400", borderBottom: "1px solid rgb(107, 107, 107, .2)" }}>Cilacap</p>
                    </div>
                    <div className='gender-container col-2'>
                        <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Zip Code</p>
                        <p className='mb-0 pb-2' style={{ fontSize: "14px", fontWeight: "400", borderBottom: "1px solid rgb(107, 107, 107, .2)" }}>655849</p>
                    </div>
                    <div className='gender-container col-2'>
                        <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Member Status</p>
                        <p className='mb-0 pb-2' style={{ fontSize: "14px", fontWeight: "400", borderBottom: "1px solid rgb(107, 107, 107, .2)" }}>Active Member</p>
                    </div>

                </div>

            </div>
            <div className='tabs py-2 px-2 my-3 d-inline-block' style={{ backgroundColor: "#F8F8F8" }}>
                <button className="btn px-4 " style={{ backgroundColor: "#FFFFFF", color: "#4469BA", fontSize: "12px", fontWeight: "500" }}>Upcoming Appointments</button>
                <button className="btn px-4" style={{ color: "#6B6B6B", fontSize: "12px", fontWeight: "500" }}>Past Appointments</button>
                <button className="btn px-4" style={{ color: "#6B6B6B", fontSize: "12px", fontWeight: "500" }}>Medical Records</button>
            </div>
            <div className='data-container mt-4 py-3 rounded' style={{ backgroundColor: "#F8F8F8" }}>
                <div className='d-flex justify-content-between px-3 pb-2' style={{ borderBottom: "1px solid rgb(107, 107, 107, .2)" }}>
                    <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400" }}>Root Canal Treatment</p>
                    <button className='btn' style={{ backgroundColor: "#FFFFFF" }} >
                        <p className='mb-0' style={{ color: "#6B6B6B", fontSize: "12px", fontWeight: "400" }}>Show Previous Treatments</p>
                    </button>
                </div>
                <div className='container'>
                    <div className='d-flex align-items-center col-12 mt-4 p-3 rounded ' style={{ backgroundColor: "#FFFFFF" }}>
                        <div className='col-3'>
                            <p className='mb-0' style={{ fontSize: "24px", fontWeight: "700" }}>26 Nov ‘19</p>
                            <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>09.00 - 10.00</p>
                        </div>
                        <div style={{ height: "34px", border: "1px solid rgb(107, 107, 107, 0.5)" }}></div>
                        <div className='col-3' style={{ paddingLeft: "50px" }}>
                            <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Treatment</p>
                            <p className='mb-0 ' style={{ fontSize: "16px", fontWeight: "400", color: "#242831" }}>Open Access</p>
                        </div>
                        <div style={{ height: "34px", border: "1px solid rgb(107, 107, 107, 0.5)" }}></div>
                        <div className='d-flex w-100  justify-content-around'>
                            <div>
                                <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Dentist</p>
                                <p className='mb-0' style={{ fontSize: "14px", fontWeight: "400", color: "#242831" }}>Drg. Adam H.</p>
                            </div>
                            <div>
                                <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Nurse</p>
                                <p className='mb-0' style={{ fontSize: "14px", fontWeight: "400", color: "#242831" }}>Jessicamila</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img src={note2} alt="" />
                                <p className='mb-0 ps-2' style={{ fontSize: "12px", fontWeight: "400", color: "#3156C8" }}>Note</p>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex align-items-center col-12 mt-4 mb-3 p-3 rounded' style={{ backgroundColor: "#FFFFFF" }}>
                        <div className='col-3'>
                            <p className='mb-0' style={{ fontSize: "24px", fontWeight: "700" }}>26 Nov ‘19</p>
                            <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>09.00 - 10.00</p>
                        </div>
                        <div style={{ height: "34px", border: "1px solid rgb(107, 107, 107, 0.5)" }}></div>
                        <div className='col-3' style={{ paddingLeft: "50px" }}>
                            <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Treatment</p>
                            <p className='mb-0 ' style={{ fontSize: "16px", fontWeight: "400", color: "#242831" }}>Open Access</p>
                        </div>
                        <div style={{ height: "34px", border: "1px solid rgb(107, 107, 107, 0.5)" }}></div>
                        <div className='d-flex w-100  justify-content-around'>
                            <div>
                                <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Dentist</p>
                                <p className='mb-0' style={{ fontSize: "14px", fontWeight: "400", color: "#242831" }}>Drg. Adam H.</p>
                            </div>
                            <div>
                                <p className='mb-0' style={{ fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>Nurse</p>
                                <p className='mb-0' style={{ fontSize: "14px", fontWeight: "400", color: "#242831" }}>Jessicamila</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img src={note2} alt="" />
                                <p className='mb-0 ps-2' style={{ fontSize: "12px", fontWeight: "400", color: "#3156C8" }}>Note</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProfileDetails