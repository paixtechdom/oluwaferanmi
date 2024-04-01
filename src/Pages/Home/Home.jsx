import './Home.css'
import {Helmet} from 'react-helmet-async'   
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import { Contact } from '../Contact/Contact'
import { Services } from '../Services/Services'
import { AppContext } from '../../App'
import { Resume } from '../Resume/Resume'
import { ScrollTop } from '../../Components/ScrollTop'
import { Footer } from '../Footer'
import { Parallax, ParallaxRight } from '../../Components/Parallax'

const Home =() =>{
    const { smallScreen, mediumScreen }= useContext(AppContext)
    const [ heroImgClass, setHeroImgClass ] = useState('')
    const [ i, setI ] = useState(0)

    const Links = [
        {
            name: 'About',
            icon: 'person-fill',
            h3: 'About Me',
        },
        {
            name: 'Skills',
            icon: 'code',
            h3: 'My Skills',
        },
        {
            name: 'Services',
            icon: 'hdd-stack-fill',
            h3: 'Projects',
        },
        {
            name: 'Projects',
            icon: 'journal-code',
            h3: 'Projects',
        },
        {
            name: 'Contact',
            icon: 'envelope-fill',
            h3: 'Contact Me',
        }
    ]
    const picAndRole = [
        {
            img: 'me2reverse.png',
            role:'Web Developer'
        },
        {
            img: 'hero2.png',
            role: 'Web Design'
        },
        {
            img: 'hero.png',
            role:'Web Development'
        },
        {
            img: 'hero3.png',
            role: 'Web Apps'
        }
    ]
    
    useEffect(() => {
        setHeroImgClass('heroImg')
    }, []);
    
    
    useEffect(() => {
        const interval = setInterval(() => {
            setHeroImgClass('fadeIn')
            setTimeout(() => {
                nextSlide()
                
            }, 1000);

        }, 3000); 
        return () => clearInterval(interval);
    }, [i]);
    
    
    const nextSlide = () =>{
        
        setI(i == picAndRole.length - 1 ? 0 : i + 1)
        setHeroImgClass('heroImg')
  
    }

    return(
        <>
        <Helmet>
            <title>Oluwaferanmi John</title>
        </Helmet>
        <div className='w-100 d-flex justify-content-center'>
            <div className='body w-100'>
                
                <header id='Home' className={`parent header d-flex w-100 align-items-center justify-content-center ${mediumScreen ? 'flex-column' : ''}`}>
                    <div className={`d-flex justify-content-between ${mediumScreen ? 'align-items-center' : ''} flex-column`} style={{
                        paddingLeft: !mediumScreen ? 10+'%' : '' 

                    }}>

                    {/* <ParallaxRight id={'heroName'} center={true}> */}
                        <h1 className={`fw-bold text-blue ${mediumScreen ? 'text-center' : ''}`}>
                            Oluwaferanmi John
                            </h1>

                        <p className={`lead fw-bold ${mediumScreen ? 'text-center' : ''}`} style={{
                            transition: 'all 0.5s ease'
                        }}>{picAndRole[i].role}</p>


                        <div className='d-flex justify-content-center' style={{
                                width: mediumScreen ? 100+'%' : ''
                            }}>
    
                            <div className={`d-flex justify-content-between ${mediumScreen ? 'w-25' : 'w-100'}  socialLinks bg-light shadow`}>

                                {
                                    SocialMedia.map((medium, key) => (
                                        <a href={medium.a} key={key}><i className={`bi ${medium.icon} fs-3  text-blue`}></i></a>
                                        
                                        ))
                                    }    
                            </div>
                        </div>
                                    {/* </ParallaxRight> */}
                    </div>
                        <div className="myImg">
                        {
                            picAndRole.map((pic, key) => (
                                i == key &&
                                
                                <img src={`/img/${pic.img}`} alt="Hero Img" className={`$s{heroImgClass}`}  key={key} loading="lazy"/>
                                ))
                            }
                        </div>


                </header>
                <div className='overflow-hidden pageBody' style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(/img/code.png)',
                    backgroundPosition: mediumScreen ? 'center' : 10,
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 100+'%',
                    paddingLeft: mediumScreen ? 5+'%' : 10+'%',
                    paddingRight:  mediumScreen ? 4+'%' : 2+'%',
                    width: 100+'%'

                }}>
                    {/* <div className='codeParent d-flex justify-content-center transition'>
                        <img src='/img/code.png' className='transition w-50'/>
                    </div> */}
                    <About links={Links}/>
                    {/* <Resume /> */}
                    {/* <Services />  */}
                    <Projects />
                    <Contact />
                    <Footer />
                    <ScrollTop />
                </div>
            </div>
        </div>
        </>
    )
}

 const SocialMedia =  [
     {
         icon: 'bi-envelope-fill',
         a: 'mailto:johnoluwaferanmi0106@gmai.com'
     },
     {
         icon: 'bi-whatsapp',
         a: 'https://api.whatsapp.com/send?phone=2347063730930'
     },
    {
        icon: 'bi-facebook ',
        a: 'https://www.facebook.com/oluwaferanmi.peace.96'
    },
    // {
    //     icon: 'bi-instagram ',
    //     a: '#'
    // },
    {
        icon: 'bi-github',
        a: 'https://github.com/paixtechdom'
    },
    
]

export { Home,  SocialMedia }