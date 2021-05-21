import {Link} from "react-router-dom";
import { useWatch } from "../Context/WatchlaterContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faMusic,faHistory,faBars,faUser } from '@fortawesome/free-solid-svg-icons'



export default function Header(){
    const {itemInlater} = useWatch();
    return(
        <div className="header">



            {/* // Hamburger icon and text */}
            <div className="IconText"> 
            <span className='cursor' style={{marginTop:"0.2rem"}}><FontAwesomeIcon icon={faBars}  size='lg' color='white' /></span>
            <Link to="/"><span className="headtext cursor">Video Library</span></Link>
            </div>

           
            {/* // searchbox and searchicon */}

             <div className="headerInput">
             <input type="text"  placeholder="Search"/>
             </div>

    {/* // Three Icons  */}

    
    <div className="iconsbox">


   <div style={{display:"block"}}>
    <span style={{display:"block"}}>
    
   <Link to="/watch-later"><FontAwesomeIcon icon={faClock}  size='lg' color='white' /></Link>
   {
       itemInlater.length !==0 ?<span class="badge">{itemInlater.length}</span> : <div></div> 
   }
   
    </span>
    </div>
    <div style={{display:"block"}}>
    <span style={{display:"block"}}><Link to="/playlist"><FontAwesomeIcon icon={faMusic}  size='lg' color='white'/></Link></span>
    </div>
    
    <div style={{display:"block"}}>
    <span style={{display:"block"}}><Link to="/history"><FontAwesomeIcon icon={faHistory}  size='lg' color='white'/></Link></span>
    </div>

    <div>

    <Link to='/login'><FontAwesomeIcon icon={faUser}  size='lg' color='white' /></Link>

    </div>


    </div>



        

        </div>
    );
}