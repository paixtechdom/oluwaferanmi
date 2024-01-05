import { AppContext } from "../../App"
import { useEffect, useContext } from "react"
import './About.css'
import { Parallax, ParallaxRight } from "../../Components/Parallax"

export const About =() =>{
    const { smallScreen, mediumScreen }= useContext(AppContext)
    const info = [
        {
            label: 'Website',
            fact: 'johnoluwaferanmi.netlify.app'
        },
        {
            label: 'Phone',
            fact: '+234-706-373-0930',
        },
        {
            label: 'City',
            fact: 'Ibadan, Nigeria'
        },
        {
            label: 'Email',
            fact: 'johnolwaferanmi0106@gmail.com',
        },
        {
            label: 'Education',
            fact: 'Bsc. Computer Science'
        },
        // {
        //     label: 'Freelance',
        //     fact: 'Available'
        // },
    ]
    const skills = ['HTML', 'CSS',  'Javascript', 'React', 'Bootstrap', 'SASS', 'Responsive Design', 'SEO', 'Version Control',  'PHP', 'Database Design', 'JSON', '  Debugging' ]

    return(
        <div id="About" className="parent d-flex flex-column gap-5 mb-5 align-items-center ">
            <div className=" w-100 d-flex justify-content-center text-blue mt-5">
                <h2 className="text-center fw-bold mt-5">About</h2>

            </div>
            <div className={`d-flex gap-5 align-items-center justify-content-between w-90 ${mediumScreen && 'flex-column'}`}>

                <div className={`me text-center w-50`}>
                    <Parallax id={'aboutImg'}>
                        <img src="./img/me2.png" alt="my picture" className=" rounded-3 shadow w-100"/>
                    </Parallax>
                </div>

                <div className="d-flex flex-column">
                    <h5 className="text-blue fw-bold">Web Developer || Web Designer</h5>
                    <div className="text-justify mb-2" style={{
                        lineHeight: 30+'px'
                    }}>
                    <Parallax id={'aboutMe'} >
                        Detailed-oriented self-taught Frontend Website Developer with nearly 2 years experience working with HTML, CSS, Javascript and React. Highly adept for both independent and collaborative projects.
                    </Parallax>
                    </div>
                    <div className="gap-1" style={{
                        display: mediumScreen ? 'flex' : 'grid',
                        flexDirection: 'column',
                        // gridTemplateColumns: 'repeat(2, 1fr)'
                    }}>
                        {
                            info.map((info, key) =>(
                                <ParallaxRight key={key} id={info.label}>
                                <div className='d-flex align-items-center flex-wrap p-0 m-0'>
                                    <i className="fw-bold fs-5 text-blue bi bi-chevron-right">&nbsp;</i>


                                    <p className="m-0 "><strong>{info.label}: </strong></p> 

                                    <a href={`${
                                        
                                        info.label == 'Email' ? `mailto:${info.fact}` : info.label == 'Phone' ? 'tel:+2347063730930'
                                        : '#'
                                        
                                    }`} className="text-decoration-none text-dark"> &nbsp;{info.fact}</a>

                                </div>
                                </ParallaxRight>
                            ))
                        }
                    </div>
                    <div className="mt-3">
                        <a href="/OluwaferanmiJohn.pdf" className={`btn bg-blue bn-sm text-light p-2 px-3 ${smallScreen ? 'w-0' : 'w-5'}`}><i className="bi bi-download"></i> Donwload resume </a>

                    </div>
                </div>
            </div>


            <div id="Skills" className="parent w-100 d-flex justify-content-center align-items-center flex-column parent">
                <div className="w-100 d-flex justify-content-center">
                    <h2 className="text-center fw-bold my-5  text-blue">Skills</h2>
                </div>
                <div className="gap-3 d-flex flex-wrap justify-content-center w-90" style={{
               
                }}>
                    {
                        skills.map((skill, key) =>(
                            <Parallax key={key} id={skill.split(' ').join('')}>

                            <div className="d-flex flex-column m-0" >
                               
                            <p className="w-100 p-3 rounded-3  shadow-sm fw-bold skill  bg-white">
                                {skill}
                            </p>
                            </div>
                            </Parallax>
                        ))
                    }
                </div>
               
            </div>
        </div>
    )
}