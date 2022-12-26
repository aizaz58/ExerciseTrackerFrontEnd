import {FaHiking, FaRunning, FaSwimmer, FaWalking} from "react-icons/fa"
import {IoBicycleSharp} from "react-icons/io5"

const ActivityIcon = ({type}) => {

  return (
    <>

     {type=="Walk"?<FaWalking/>:type=="Swim"?<FaSwimmer/>:type=="Run"?<FaRunning/>:type=="Hike"?<FaHiking/>:<IoBicycleSharp/>}
    </>

  )
}

export default ActivityIcon