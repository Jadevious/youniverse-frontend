import '../App.css';
import { useState } from 'react';

function Test() {
    const [loadingStatus, setLoadingStatus] = useState('false')
    return (
        <div className='container-fluid App-foundation p-5 text-center'>
            <ProgressBar />
            <MyButton />
        </div>
    )
}

const ProgressBar = () => {
    return(
        <div>
            <div className='progress' style={{height: "40px"}}>
                <div className='progress-bar bg-info progress-bar-striped progress-bar-animated' style={{height: "40px", width: "100%"}}>
                    Loading...
                </div>
            </div>
        </div>
        
    )
}

const MyButton = () => {
    const [loadingStatus, setLoadingStatus] = useState(false)
    const toggleState = () => {
        setLoadingStatus(!loadingStatus)
    }
    
    if (loadingStatus) {
        return (
            <div>
                <p>Congrats, you clicked the button!</p>
                <button type="button" className="btn btn-primary" disabled>
                    <span class="spinner-grow spinner-grow-sm"></span>
                    Loading...
                </button>
            </div>
            
        )
    }
    return (
        <div>
            <p>Click below to change button state to loading:</p>
            <button type="button" className="btn btn-primary" onClick={toggleState}>
                Save changes
            </button>
        </div>
    )
    
    
}

export default Test;