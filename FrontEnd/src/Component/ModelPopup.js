import { usePlaylist } from "../Context/PlaylistContext"
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { font } from '../Utils/FontAwesome';
export default function Model(){
let {modal,setmodal} = usePlaylist();
return (
<div className="Modal">
<div className="Modal-Content">
<span className="close" onClick={()=>setmodal(!modal)}>{font(faTimesCircle)}</span>
<span>Save As....</span>
<hr class="dashed"></hr>
<div className='watch-later-section'><input  style={{marginTop:'0.4rem'}} type="checkbox" name="name"/>
<span>Watch Later</span></div>
<button className='create-playlist'>Create New Playlist</button>
</div>
</div>
);

}
    