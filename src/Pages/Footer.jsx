import { SocialMedia } from "./Home/Home"


export const Footer = () =>{
    return(
        <div className="footer d-flex flex-column text-center align-items-center py-5 mt-5 bg- text-dark">
            <h2 className="text-center text-blue">Oluwaferanmi Peace</h2>
         
            <div className='d-flex justify-content-between  socialLinks  '>

            {
                SocialMedia.map((medium, key) => (
                    <a href={medium.a} key={key}><i className={`bi ${medium.icon} fs-3  text-blue`}></i></a>
                    
                    ))
                }    
            </div>

            <p>&copy; Copyright <strong> Oluwaferanmi John </strong></p>
        </div>
    )
}