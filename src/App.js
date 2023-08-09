import { useState } from "react";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import Editform from "./Editform";


function App() {

  const usersData =[
    {"id": "1", name: "praveen", userName:"pkumar" },
    {"id": "2", name: "vimal ", userName:"vjayaram" },
    {"id": "3", name: "ajith ", userName:"ak" },
  ];

  const addUser = (user) =>{
    user.id=users.length + 1;
    setUsers([...users,user]);
  }
  const deleteUser = (id) =>{
    setUsers(users.filter((user) => user.id !== id ))
  }

  const [users,setUsers]=useState(usersData);
  const [editing,setEditing] = useState(false)

  const initialFormState = {id:null,name:'',userName:''}
  const [currentUser, setCurrentUser]= useState(initialFormState);

  const editRow = (user) =>{
    setEditing(true);
    console.log(user)
    setCurrentUser({id:user.id,name:user.name,userName:user.userName})
  } 

  const updateUser= (id,updatedUser) =>{
    setEditing(false);
    setUsers(users.map((user) =>user.id===id?updatedUser:user))
  }
  

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
          editing?
          (<div>
            <h2>Edit user</h2>
              <Editform updateUser={updateUser} currentUser ={currentUser} 
              setEditing ={setEditing}/>
          </div>)
          :
            (<div> 
              <h2>Add user</h2>
              <UserForm addUser={addUser} />
            </div>)
          }
          
        </div>
        <div className="flex-large">
          <h2>view users</h2>
          <UserTable editRow={editRow} users={users} deleteUser={deleteUser} />
        </div>
        
      </div>
    
    </div>
    
  );
}

export default App;
