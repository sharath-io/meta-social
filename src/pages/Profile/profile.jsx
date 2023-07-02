import { useParams } from "react-router-dom"

export function Profile(){
    const {username} = useParams();
    return (
        <div>

            <div className='display-content'>
             <div className='content-heading'>Profile page</div>
            </div>

            <div className="main-content">
               <p> this is profile {username} </p>

               
            </div>
            
        </div>
    )
}