import {Link} from "react-router-dom";
export default function Header(){
    return(
        <div className="header">

           
            {/* // Hamburger icon and text */}
            <div className="IconText"> 
            <span style={{marginTop:"0.2rem"}}><i class="fa fa-bars cursor"></i></span>
            <Link to="/"><h3 className="cursor">Video Library</h3></Link>
            </div>

           
            {/* // searchbox and searchicon */}

             <div className="headerInput">
             <input type="text"  placeholder="Search"/>
             </div>

    {/* // Three Icons  */}

    
    <div className="iconsbox">
    <Link to="/watch-later"><i class="fa fa-music cursor"></i></Link>
    <Link to="/playlist"><i class="fa fa-music cursor"></i></Link>
    <Link to="/history"><i class="fa fa-history cursor"></i></Link>
    </div>



        

        </div>
    );
}