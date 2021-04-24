import { arr } from "./dataArray";



export default function Video(){
    return(
        <div className="GridFrame">
           {

               arr.map(function(item){
                   return(
                        <div className="Card">
                        {<img src={item.image} height="145px" width="258px"/> }
                        <div className="title">
                        {<img className="roundedAvatar"  src={item.avatar} height="30px" width="30px"/> }
                        {item.name}

                        </div>
                        </div>


                       
                   );
               })
           }
    
        

        </div>
    );
}
