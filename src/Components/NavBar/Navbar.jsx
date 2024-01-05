import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef, useContext } from 'react'
import { AppContext } from '../../App'

export const Navbar = () =>{
    const [ showLabel, setShowLabel ] = useState(false)
    const [ mouseOverKey, setMouseOverKey ] = useState(null)
    const [ posWidth, setPosWidth ] = useState(2)
    const [ navPos, setNavPos ] = useState(0)
    
    const { currentNav, setCurrentNav, mediumScreen, smallScreen } = useContext(AppContext)

    useEffect(() =>{
        if(window.matchMedia('(max-width:950px)')){
            setNavPos(-250)
        }else{
            setNavPos(0)
        }

        document.querySelectorAll('#nav').forEach((nav) => {
            nav.addEventListener('click', () => {
                setNavPos(-250)
            })
        })
    }, [])
    
    
    
    const handleScroll = () => {
        document.querySelectorAll('.parent').forEach((parent, i) =>{
            const pos = parent.getBoundingClientRect()
            if( pos.top > -10 && pos.top < 100) {
                setCurrentNav(i)
            } 
        })

        const pageHeight = document.documentElement.scrollHeight - window.innerHeight
        const currentPos = window.scrollY
        setPosWidth(currentPos / pageHeight * 100 < 2 ? 2 : currentPos / pageHeight * 100)
     
      
    }

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        
    }, [])
    // if(document.documentElement.scrollTop > 449)


    const Links = [
        {
            name: 'Home',
            icon: 'house-fill',
            h3: 'About Me',
        },
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
        // {
        //     name: 'Services',
        //     icon: 'hdd-stack-fill',
        //     img: 'why-us.png',
        //     h3: 'Services',
        //     p: 'I have worked on many projects using vanilla javascript, react and php'
        // },
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
    return(
        <>
        {
             mediumScreen &&
            <h3 
            onClick={() => {
                setNavPos(navPos == 0 ? -250 : 0)
            }}
            style={{
                position: 'fixed',
                top: 5+'%',
                right: 5+'%',
                zIndex: 4000
            }}
            className="shadw-sm p-2 rounded-3 bg-white"
            >
                {
                    navPos == 0 ? 
                    <i className='bi bi-x-lg text-blue'></i> :
                    <i className='bi bi-justify text-blue'></i>
                }
            </h3>
        }
        <nav className={`Navbar d-flex align-items-center justify-content-${mediumScreen ? 'center' : 'start'}`} style={{
            transform: mediumScreen ? `translateX(${navPos}px)` : '', 
        }}>
            <div className='d-flex align-items-center justify-content-center navParent'>
                <div className="nav d-flex justify-content-center flex-column">
                    {
                        Links.map((link, key) => (
                            <a key={key}
                            href={`#${link.name}`}
                            id="nav"
                            className={`d-flex ${mediumScreen ? 'px-4' : 'justify-content-center p-2'}  ${mouseOverKey == key && 'gap-2'}`}
                            onMouseOver={(e) => {setShowLabel(true)
                                setMouseOverKey(key)
                            }}
                            onMouseOut={() => {setShowLabel(false)
                                setMouseOverKey(null)
                            }}
                            style={{
                                width: mediumScreen ? 200+'px' : showLabel  && mouseOverKey == key ? 'auto' : 50+'px',
                                backgroundColor: key == currentNav || 
                                mouseOverKey == key ? '#1b1f84' : 'rgb(192, 191, 191, 0.5)',

                                color: key == currentNav || 
                                mouseOverKey == key ? 'white' : 'black',
                            }}>
                                <p className=''>
                                    <i className={`fs-5 bi bi-${link.icon}`}></i>
                                </p>
                                <p className={`d-flex align-items-center h-100 justify-content-center ${ mediumScreen && 'px-2'}`}>
                                {   
                                    mediumScreen 
                                    && 
                                        link.name
                                }
                                {   
                                !mediumScreen  &&
                                    showLabel && mouseOverKey == key 
                                    && 
                                        link.name


                                }
                                </p>
                            </a>

                        ))
                    }
                </div>
               
            </div>

        </nav>
            <div className="position-fixed top-0 flex justify-content-center" style={{
                zIndex: 8000,
                width: 100+'%'
            }}>

                <div className="bg-blue d-flex justify-content-end transition" style={{
                    width: posWidth+'%',
                    height: 3+'px'
                }}>
                    <i className="bi bi-person-fill position-absolut right-0 transition" style={{
                        left: posWidth+'%',
                        fontSize: 20+'px'
                    }}></i>
                </div>
            </div>
            
        </>
    )
}