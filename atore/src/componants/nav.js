import {Link} from 'react-router-dom'
import '../style/nav.css'

export default function Nav() 
{
 
    
    return(
        <div className="nav">
        <ul>
            <li>
               <Link to="/">home</Link>
            </li>
             <li>
               <Link to="/second">second</Link>
            </li>
            
        </ul>
        </div>
    )
}