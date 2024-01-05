import { useContext, useState, useRef } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../App"
import { SocialMedia } from '../Home/Home'
import emailjs from '@emailjs/browser'
import axios from "axios"
import { Parallax, ParallaxRight } from "../../Components/Parallax"

export const Contact =() =>{
    const { mediumScreen,  setShowAlert, setAlertMessage, setAlertType } = useContext(AppContext)
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ nameError, setNameError ] = useState(false)
    const [ messageError, setMessageError ] = useState(false) 
    const [ isLoading, setIsLoading ] = useState(false) 

    const form = useRef()
    const contactInfo = [
      
        {
            icon: 'bi-envelope',
            h3: 'Email',
            a: 'johnoluwaferanmi0106@gmail.com',
            link: 'mailto:johnoluwaferanmi0106@gmail.com'
        },
        {
            icon: 'bi-whatsapp',
            h3: 'Whatsapp',
            a: '+234-706-373-0930',
            link: 'https://api.whatsapp.com/send?phone=2347063730930'
        },
        {
            icon: 'bi-facebook',
            h3: 'Facebook',
            a: 'Oluwaferanmi Peace',
            link: 'https://www.facebook.com/oluwaferanmi.peace.96'

        },
        {
            icon: 'bi-github',
            h3: 'Github',
            a: 'Paix Techdom',
            link: 'https://github.com/paixtechdom'
        },
      
    ]
   
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setIsLoading(true)
        const newName = name.split(' ').join('')
        const newMessage = message.split(' ').join('')
        if(newName.length < 5 || newName == 0){
            setNameError(true)
            setMessageError(false)
        }else if(newMessage.length < 5 || newMessage == 0){
            setMessageError(true)
            setNameError(false)
        }else{
            setMessageError(false)
            setNameError(false)

            const serviceId = 'service_xhn7c5e';
            const templateId = 'template_seeyysd';
            const publicKey = 'OB73Vlg7iLdz4EZD6';
         
            const data = {
                service_id: serviceId ,
                template_id: templateId,
                user_id: publicKey,
                 template_params: {
                    from_name: name,
                    from_email: email,
                    to_name: 'Oluwaferanmi Peace',
                    message: 
                    'SUBJECT -      ' + subject + 
                    ' MESSAGE -     ' + message
                }
            };

            await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
            .then((response) => {
            setShowAlert(true)
            setAlertType('success')
            setIsLoading(false)
            setAlertMessage('Message sent successfully!')
            setName('')
            setEmail('')
            setMessage('')
        })
        .catch((error) =>{
            setShowAlert(true)
            setIsLoading(false)
            setAlertType('error')
            setAlertMessage('Error sending message')
        })
     }
    }
    return(
        <div id="Contact" className="parent d-flex flex-wrap my-5 gap-5 pb-5">
            <div className="w-100 d-flex justify-content-center text-blue text-center">
                <h2 className="text-center fw-bold mt-5">Contact</h2>
            </div> 
            <div className={`d-flex justify-content-between w-100 ${mediumScreen && 'flex-column gap-5'}`}>
                <div className={`d-flex flex-column gap-4  ${mediumScreen ? 'align-items-center w-100' : 'w-50'}`}>
             
                    {
                        contactInfo.map((info, key) => (

                            <div className="d-flex gap-3 align-items-center w-100" key={key}>
                            <Parallax id={info.icon}>

                                <i className={`bi ${info.icon} fs-4 bg- text-blue shadow-sm d-flex justify-content-center align-items-center`} style={{
                                    minHeight: 60+'px',
                                    maxHeight: 60+'px',
                                    maxWidth: 60+'px',
                                    minWidth: 60+'px',
                                    borderRadius: 100+'%'
                                }}></i>
                            </Parallax>
                            <ParallaxRight id={info.icon}>

                                <div className="d-flex flex-column justify-content-center h-100 overflow-hidden">
                                    <h3 className="text-blue fs-5 fw-bold p-0 m-0">{info.h3}:</h3>
                                    <a href={`${info.link}`} className='text-dark text-decoration-none p'>{info.a}</a>
                                </div>
                            </ParallaxRight>
                            </div>
                        ))
                    }
                    
                </div>
                <form className={`p-4 text-dark ${mediumScreen ? 'w-100' : 'w-75'} rounded-4  bg- shadow php-email-form`} onSubmit={handleSubmit}>
                    <Parallax id='contactName'>
                    <div className="mb-3">
                        <input type="text" className=" text-dark  form-control-sm rounded-2 w-100 border-0 shadow bg-white p-2" id="fullname" placeholder='Your Name' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                        />
                        {
                            nameError ? 
                            <p className="text-danger text-center">Name is too short</p> : ''
                        }
                    </div>
                        
                    </Parallax>
                    <Parallax id='contactEmail'>
                    <div className="mb-3">
                        <input type="email" className="bg-white text-dark form-control-sm rounded-2 w-100 border-0 shadow p-2" id="exampleInputEmail1"  placeholder='Your Email' 
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required
                         />
                    </div>
                        
                    </Parallax>
                    <Parallax id='contactSubject'>
                        
                    <div className="mb-3">
                        <input type="text" className="bg-white text-dark form-control-sm rounded-2 w-100 border-0 shadow p-2" id="exampleInputEmail1"  placeholder='Subject' 
                         value={subject}
                         onChange={(e) => setSubject(e.target.value)}
                         required
                         />
                    </div>
                    </Parallax>
                    <Parallax id='contactMesssage'>
                    <div className="mb-3">
                        <textarea name="" id="" className='bg-white text-dark form-control-sm rounded-2 w-100 border-0 p-2 shadow' placeholder='Message' required  style={{
                            height: 200+'px'
                        }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        {
                            messageError ? 
                            <p className="text-danger text-center">Message is too short</p> : ''
                        }
                    </div>
                        
                    </Parallax>
                      <Parallax id='submit'>

                    <button type="submit" className="btn my-4  w-100 text-white fs-5 btn-light bg-blue shadow-sm">{isLoading? 'Sending Message...': 'Send Message'}</button>
                      </Parallax>
                </form>       
            </div>
                  
                   
          
        </div>
    )
}