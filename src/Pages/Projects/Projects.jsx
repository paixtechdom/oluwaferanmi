import { useEffect, useState } from 'react'
import './Projects.css'
import '../About/About.css'
import { Link } from 'react-router-dom'
import { Parallax, ParallaxRight } from '../../Components/Parallax'


export const Projects =() =>{
    const projects = [
        {
            title: 'Landing Page - Saculiet NIG Enterprises',
            lang: ['REACT', 'Tailwind', 'PHP', 'SQL', 'SEO'],
            link: 'https://saculietdrivingschool.com',
            description:  ['Designed a well detailed and beautiful landing page for the driving school, highlighting the service of the organization and other important details', 'Developed a gallery which displays images and videos of the driving school and their activity', 'Implemented SEO optimization which brought a 10% increase in their lead generation'],
            img: 'saculietImg.png'
        },
        {
            title: 'Student Verification Portal - Saculiet NIG Enterprises',
            lang: ['REACT', 'Tailwind', 'PHP', 'SQL'],
            link: 'https://saculietdrivingschool.com',
            description:  ['Developed a portal for the Driving School Arm of the company, for organizations to verify the certificates of the students of the driving school', 'Key features includes:', '•    A page for organizations to submit student verification requests', '•    Email verification', '•    A dashboard for the school to view and manage requests, student and organizations', '•    Emails to notify the school of a request submission, inform organizations when the requests is granted and to inform students when their certificate is verified by an organization', '•    Secure authentication for organizations to access the portal and for admin login'],
            img: 'studentVerificationImg.png'
        },
        {
            title: 'Website for Christ Liberty Assembly',
            lang: ['REACT', 'Tailwind', 'PHP', 'SQL', 'JSON'],
            link: 'https://christlibertyassembly.org.ng',
            description:  ['Developed a website for the church, Christ Liberty Assembly containing key sections such as:', '•   A page for displaying sermons and a gallery page that displays images of the church.', '•	A page to display articles and a page for each article. The link to each article can be shared on Facebook, WhatsApp or the copied to clipboard.', '•	A search functionality to filter out articles by title and sermons by title or preacher.'],
            img: 'classImg.png'
        },
        {
            title: 'Website for Paix Techdom',
            lang: ['REACT', 'Tailwind'],
            link: 'https://paixtechdom.netlify.app',
            description:  ['Designed a landing page for a website Development Company, displaying the basic information about the services of the company.'],
            img: 'paixTechdomImg.png'
        },
        {
            title: 'PREJUM - BLOG',
            lang: ['REACT', 'PHP', 'Tailwind', 'JSON'],
            link: 'https://prejum.netlify.app',
            description:  ['Designing personal blog a home, about and contact page and then the main blog.', 'Implenemted search algorithms to search or filter blogs'],
            img: 'blogImg 2.png'
        },
        {
            title: 'Website for Macmay Group',
            lang: ['REACT', 'BOOTSTRAP', 'CSS'],
            link: 'https://macmaygroup.netlify.app',
            description:  ['This is a website still under development for Macmay Group of Company.',' The website currently displays only information about the company and also media through which they can be contacted.'],
            img: 'macmayImg.png'
        },
        // {
            //     title: 'Online Exam Application',
            //     lang: ['REACT', 'CSS', 'PHP', 'SQL'],
        //     link: 'https://online-exam-app.000webhostapp.com/',
        //     description:  ['This is an online exam application (multiple choice questions) developed to conduct examination. ','It has key functionalities such as setting of questions by the admin, adding timers, randomization of questions to minimize cheating, importing of questions in csv format, viewing of students performance, ensuring exams are taken once and so on.',' It also has login functionality to ensure security.', 'bold Still under development'],
        //     img: 'projectMacmay.png'
        // },
        {
            title: 'Social Media Website',
            lang: ['REACT', 'CSS', 'PHP', 'SQL'],
            link: 'https://eduaidsocialmedia.000webhostapp.com/',
            description:  ['bold Username: guest','bold Password: guestguest','This is a custom social media application suitable for a university.',' It has features such as adding of posts which can be texts, a picture or both.','It also has sections to view updates added by the admin, a gallery section, and a section where the final year student can upload a copy of their projects, which can be downloaded by the other students.', 'It also has the functionality for updating of password and profile picture.'],
            img: 'eduaid.jpeg'
        },
        // {
            //     title: 'Website for Swift Courier Exchange',
            //     lang: ['HTML', 'CSS', 'PHP', 'SQL'],
        //     link: 'https://swiftcourierexchange.com',
        //     description:  ['Developed a website for a logistic company, which displays information about the company, and most importantly creating of shipments and tracking of shipments.', 'The website includes functionality for the admin to be able to create shipments, update shipment status, and a dashboard for an overall overseeing of all active, completed and cancelled shipments.'],
        // },
        // {
            //     title: 'Website for Eduaid Consult',
        //     link: 'https://eduaidconsult.com',
        //     lang: ['HTML', 'CSS', 'JAVASCRIPT'],
        //     description:  ['Developed a website for an educational consult, which displays information about the consult, their services and means through which they can be contacted.', 'This increased their online presence and customer engagement significantly'],
        // },
        {
            title: 'G.P.A Calculator',
            link: 'https://paixtechdom-gpa.netlify.app',
            lang: ['HTML', 'CSS', 'JAVASCRIPT'],
            description:  ['A tool for students to calculate their Grade Point Average (GPA) by inputting course grades and units for each course, simplifying the process of tracking academic progress.'],
            img: 'gpa.png'
        },
        {
            title: 'Tic Tac',
            lang: ['HTML', 'CSS', 'JAVASCRIPT'],
            link: 'https://paixtechdom-tictac.netlify.app',
            description:  ['A classic two-player game played on a 3x3 grid',"Each player take turns clicking on an empty square, the first player is represented by 'X' and the second 'O' ", 'The goal is to form a row, column or or diagonal with three of their symbols, while preventing the opponent from doing same.', 'The first player to achieve that wins and if the grid is filled without a winner, the game is draw'],
            img: 'tic.png'
        },
        {
            title: 'Booklist App',
            link: 'https://paixtechdom-booklist.netlify.app',
            lang: ['HTML', 'CSS', 'JAVASCRIPT'],
            img: 'projectBook.png',
            description:  ['An application that allows users to catalog and organize their book collections by adding or removing books'],
            img: ''
        },
        {
            title: 'Rock Paper Scissors',           
            link: 'https://paixtechdom-rock.netlify.app',
            lang: ['HTML', 'CSS', 'JAVASCRIPT'],
            img: 'projectRock2.png',
            description:  ['A simple javascript game that lets you play the age-old hand game against the computer', 'Will you choose rock, paper or scissors to outsmart your opponent?'],
            img: 'rock.png'
        },
        {
            title: 'Stopwatch',
            link: 'https://paixtechdom-stopwatch.netlify.app',
            lang: ['HTML', 'CSS', 'JAVASCRIPT'],
            description:  ['A digital stopwatch with start, stop, reset, pause and count lap functionality', 'It can be used for timing activities, sports events or anything that requires precise timing'],
            img: 'clock.png'
            
        },
        {
            title: 'Scientific Calculator',
            lang: ['HTML', 'CSS', 'JAVASCRIPT'],
            link: 'https://paixtechdom-calculator.netlify.app',
            description:  ['This is an advanced calculator with scientific functions, designed to handle complex mathematical operations, including tigonometric and logarithimic calculations'],
            img: 'calculator.png'
        },
    ]
    
    
    return(
        <div id="Projects" className="parent d-flex flex-column gap-5 my-projects w-100">
            <div className="w-100 d-flex justify-content-center text-blue text-center">
                <h2 className="text-center fw-bold mt-5">Projects</h2>
            </div>  

            <div className='projectsParent mb-5 pb-5 gap-5 d-flex justify-content-center'>
           

               <div className="projects d-flex flex-wrap w-100 justify-content-between">
                {
                    projects.map((project, key) => (
                        <div className={`d-flex gap-3 eachProject ${key == projects.length - 1 ? 'lastProject': ''}`} key={key}>
                            {
                                project.title &&
                                <p className="line">
                                    <i className="circle">
                                    </i>
                                </p>
                            }
                            <div className="d-flex flex-column" >

                                <img src={`/img/${project.img}`} alt={`${project.title} img`} className='d- none w-full shadow projectTe xt rounded-3' style={{
                                    width: 80+'%',
                                    // 1360 -w
                                    // 1196 - h
                                }}/>


                                <div className="d-flex  gap-3 projectText shadow rounded-4 bg-white d-none" style={{
                                }}>
                                <ParallaxRight id={project.title.replaceAll('.', '').split(' ').join('')}>
                                    <div>
                                        <h5 className="text-blue ">
                                            {project.title}
                                            
                                        </h5>
                                <Parallax id={project.title.replaceAll('.', '').split(' ').join('')}>
                                        <div className='d-flex flex-wrap gap-2'>
                                            {
                                                project?.lang?.map((lang, key) =>(
                                                    <p className='bg-light p-2 text-muted text-small rounded' key={key}>{lang}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="d-flex flex-column">
                                            {
                                                project?.description?.map((des, key) =>(
                                                <p className='m-0 mb-3' key={key}>
                                                    {des.includes('bold') ?
                                                    <strong>{des.replace('bold', '')}</strong> : des}
                                                </p>
                                                ))
                                            }

                                        </div>
                                    </Parallax>
                                        
                                        {
                                            project?.link  ? 
                                            <a href={project.link} className='text-decoration-none btn rounded-3 bg-blue text-light mb- mt-3'>Live View</a> : ''
                                        }
                                    </div>

                            </ParallaxRight>
                                </div>
                            </div>
                            
                        </div>


                    ))
                }
            
               </div>





               
               
            
            </div>
        </div>
    )
}