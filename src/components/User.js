function User ( {properties} ) {
  
    return (
    <span className="user">
    <span className="name"> {properties.user.name} </span>
    <span className="handle"> {properties.user.handle} </span>
    </span>
    )}

export default User;