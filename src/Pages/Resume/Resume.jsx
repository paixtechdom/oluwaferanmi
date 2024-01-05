import { AppContext } from "../../App"
import { useEffect, useContext } from "react"
import './Resume.css'
export const Resume =() =>{


    return(
        <div id="Resume" className="parent gap-5 d-flex flex-column my-5 py-5">

            <div className="w-100 d-flex justify-content-center text-blue">
                <h2 className="text-center fw-bold mt-5">My Resume</h2>
            </div>
            
            <div className="d-flex gap-5">
                <div className="left d-flex flex-column gap-5">
                    <div className="d-flex flex-column gap-2">
                    <h4 className="fw-bold">Summary</h4>
                        <div className="d-flex gap-3">
                            <p className="line">
                                <i className="circle">
                                </i>
                            </p>
                            <div>
                                <h5 className="text-blue fw-bold">
                                    Oluwaferanmi Peace
                                </h5>
                                <p>
                                    <i>
                                    Detailed-oriented self-taught Frontend Website Developer with close to 2 years experiance working as a web developer. Highly adept for both independent and collaborative projects, with an emphasis on landing page and website development.
                                    </i>
                                </p>
                                
                            </div>

                        </div>
                    </div>
                    <div className="d-flex flex-column gap-3">
                    <h4 className="fw-bold">Education</h4>

                        <div className="d-flex gap-3">
                            <p className="line">
                                <i className="circle">

                                </i>
                            </p>
                            <div>
                                <h5 className="text-blue fw-bold">
                                    Bachelor Of Science
                                </h5>
                                <p className="bg-light p-2 w-50 text-center"> 2020-2023</p>
                                <p>
                                    <i>
                                        Protestant University Of West Africa
                                    </i>
                                </p>
                                <p>
                                    B.Sc. in Computer Science
                                </p>
                                
                            </div>

                        </div>
                    </div>
                </div>
                <div className="left">
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex gap-3">
                            <p className="line">
                                <i className="circle">

                                </i>
                            </p>
                            <div>
                                <h5 className="text-blue fw-bold">
                                    Oluwaferanmi Peace
                                </h5>
                                <p>
                                    <i>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magnam, laudantium aspernatur assumenda nesciunt voluptate neque rerum atque tenetur eveniet!
                                    </i>
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}