const UserTable = (props) =>{

  // let delete_btn = document.querySelectorAll('.delete-btn');
  // delete_btn.forEach((element) =>{
  //   element.addEventListener('click',(user) => {
  //     props.deleteUser(user.id);
      
  //   })    
  // });
    
  
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>username</th>
            <th>Actions</th>
          </tr>          
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user,index) => {
              return(
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.userName}</td>
                  <td>
                    <button
                    onClick={() =>{
                      props.editRow(user)
                    }}
                    className="button edit-button">Edit</button>
                    <button className="button delete-btn" id="delete-btn"
                    onClick={
                      () =>{
                        props.deleteUser(user.id);
                        // console.log('click')
                      }
                    }
                     >Delete</button>
                  </td>
                </tr>)
            })
            ) : (<tr><td>No Records !!!!</td></tr>)}
          
            
          </tbody>
      </table>
    )
}



export default UserTable;