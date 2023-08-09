import { useState } from "react";

const UserForm = (props) =>{
  const initialFormState = {id:null,name:'',userName:''}
  const [user,setUser]=useState(initialFormState)

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
          props.addUser(user);
          setUser(initialFormState);

        }
      }>
        <label>Name</label>
        <input type="text" onChange={handleInputChange} name="name" value={user.name} />  
        <label>User Name</label>
        <input type="text" onChange={handleInputChange} name="userName" value={user.userName} />
        <div>
          <button className='button'>Add new user</button>
        </div>
      </form> 

)
}
export default UserForm; 