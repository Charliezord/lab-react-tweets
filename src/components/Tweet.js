import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

function Tweet ( {properties} ) {

  return (
    <div className="tweet">
      <ProfileImage properties = {properties} />

      <div className="body">
        <div className="top">
          
          <User properties = {properties} />
         
          <Timestamp properties = {properties} />  
           
        </div>
  
        <Message properties= {properties} />
        <Actions />

    </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
  
}

export default Tweet;
