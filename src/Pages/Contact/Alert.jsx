import { AppContext } from '../../App'
import './Alert.css'
import { useContext } from 'react'


export const Alert = ({alertMessage, setShowAlert, alertType, }) =>{
    const { mediumScreen } = useContext(AppContext)
    return(
        <div className="alertParent">
            <div className={`alert ${mediumScreen ? 'w-75' : 'w-50'} rounded-4 ${alertType}`}>
                <h3 className='text-center'>{alertMessage}</h3>

                <button className='bg-dark w-50 text-white border-0 p-2 rounded-3 mt-5' 
                onClick={() => setShowAlert(false)}
                >Close</button>
            </div>
        </div>
    )
}