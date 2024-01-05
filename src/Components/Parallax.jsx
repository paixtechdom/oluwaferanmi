import { useState } from "react"
import { useEffect } from "react"

const Parallax = ({children, id, center}) => {
    const [ isPosMatch, setIsPosMatch ] = useState(false)
    useEffect(() =>{
        
        const pos = document.querySelector(`#${id}`).getBoundingClientRect()
        if(pos.top < 600){
            setIsPosMatch(true)
        }      
        
    }, [])
    const handleScroll = () => {
        const pos = document.querySelector(`#${id}`).getBoundingClientRect()
        if(pos.top < 600){
            setIsPosMatch(true)
        }  
      
    }

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        
    }, [])

    return(
        <div id={id} className={`parallaxParent ${center ? 'justify-content-center d-flex' : ''} position-relative`}>
            <div className={`position-relative  ${isPosMatch ? 'animateParallaxBottom ' : 'opacity-0'}`}>
                {children}
            </div>
        </div>
    )
}
const ParallaxRight = ({children, id, center}) => {
    const [ isPosMatch, setIsPosMatch ] = useState(false)
    useEffect(() =>{
        
        const pos = document.querySelector(`#${id}`).getBoundingClientRect()
        if(pos.top < 600){
            setIsPosMatch(true)
        }      
        
    }, [])
    const handleScroll = () => {
        const pos = document.querySelector(`#${id}`).getBoundingClientRect()
        if(pos.top < 600){
            setIsPosMatch(true)
        }  
      
    }

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        
    }, [])

    return(
        <div id={id} className={`parallaxParent ${center ? 'justify-content-center d-flex' : ''} position-relative`}>
            <div className={`position-relative  ${isPosMatch ? 'animateParallaxRight ' : 'opacity-0'}`}>
                {children}
            </div>
        </div>
    )
}

export { Parallax, ParallaxRight }