import { useEffect, useState } from 'react'
import './Projects.css'
import '../About/About.css'
import { Link } from 'react-router-dom'
import { Parallax, ParallaxRight } from '../../Components/Parallax'


export const Projects =() =>{
    const projects = [
        {
            title: 'Website for Christ Liberty Assembly',
            lang: ['REACT', 'Tailwind', 'PHP', 'SQL'],
            link: 'https://christlibertyassembly.org.ng',
            description:  ['Church website with key functionalities such as article reading, listening to sermons and image gallery.'],
        },
        {
            title: 'Website for Macmay Group',
            lang: ['REACT', 'BOOTSTRAP', 'CSS'],
            link: 'https://macmaygroup.netlify.app',
            description:  ['This is a website still under development for Macmay Group of Company.',' The website currently displays only information about the company and also media through which they can be contacted.'],
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
        },
        {
            title: 'Website for Swift Courier Exchange',
            lang: ['HTML', 'CSS', 'PHP', 'SQL'],
            link: 'https://swiftcourierexchange.com',
            description:  ['Developed a website for a logistic company, which displays information about the company, and most importantly creating of shipments and tracking of shipments.', 'The website includes functionality for the admin to be able to create shipments, update shipment status, and a dashboard for an overall overseeing of all active, completed and cancelled shipments.'],
        },
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
        },
        {
            title: 'Tic Tac',
            lang: ['HTML', 'CSS', 'JAVASCRIPT'],
            link: 'https://paixtechdom-tictac.netlify.app',
            description:  ['A classic two-player game played on a 3x3 grid',"Each player take turns clicking on an empty square, the first player is represented by 'X' and the second 'O' ", 'The goal is to form a row, column or or diagonal with three of their symbols, while preventing the opponent from doing same.', 'The first player to achieve that wins and if the grid is filled without a winner, the game is draw'],
        },
        {
            title: 'Booklist App',
            link: 'https://paixtechdom-booklist.netlify.app',
            lang: ['HTML', 'CSS', 'JAVASCRIPT'],
            img: 'projectBook.png',
            description:  ['An application that allows users to catalog and organize their book collections by adding or removing books']
        },
        {
            title: 'Rock Paper Scissors',           
            link: 'https://paixtechdom-rock.netlify.app',
            lang: ['HTML', 'CSS', 'JAVASCRIPT'],
            img: 'projectRock2.png',
            description:  ['A simple javascript game that lets you play the age-old hand game against the computer', 'Will you choose rock, paper or scissors to outsmart your opponent?'],
        },
        {
            title: 'Stopwatch',
            link: 'https://paixtechdom-stopwatch.netlify.app',
            lang: ['HTML', 'CSS', 'JAVASCRIPT'],
            description:  ['A digital stopwatch with start, stop, reset, pause and count lap functionality', 'It can be used for timing activities, sports events or anything that requires precise timing'],
            
        },
        {
            title: 'Scientific Calculator',
            lang: ['HTML', 'CSS', 'JAVASCRIPT'],
            link: 'https://paixtechdom-calculator.netlify.app',
            description:  ['This is an advanced calculator with scientific functions, designed to handle complex mathematical operations, including tigonometric and logarithimic calculations'],
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
                            <div className="d-flex gap-3 projectText shadow rounded-4 bg-white">
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
                                    <div>
                                        {
                                            project?.description?.map((des, key) =>(
                                            <p className='m-0' key={key}>
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


                    ))
                }
            
               </div>





               
               
            
            </div>
        </div>
    )
}