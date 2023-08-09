import { useState } from "react";

const Editform = (props) =>{
  const [user,setUser]=useState(props.currentUser)

  const handleInputChange = (event) =>{
    const {name,value}=event.target;
    setUser({...user,[name]:value}) 
  }
  
  return(
    <form onSubmit={
      event => {
        event.preventDefault();
        if(!user.name || !user.userName) {
          alert("both field should be fill");
          return;
        }
        props.updateUser(user.id,user);
        
      }
    }>
      <label>Name</label>
      <input type="text" onChange={handleInputChange} name="name" value={user.name} />  
      <label>User Name</label>
      <input type="text" onChange={handleInputChange} name="userName" value={user.userName} />
      <div>
        <button className='button'>update user</button>
        <button onClick={() =>{
          
          props.setEditing(false);
        }
      } className='button'>cancel</button>
      </div>
    </form> 
  )
}

export default Editform;