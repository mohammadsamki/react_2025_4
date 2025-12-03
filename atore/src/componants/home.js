import {useState} from 'react'
export default function Home() 
// life cycle 
//  initialization : 
//  mounting : 
//  updating : useState
//  unmounting
{
    //  const [stateName, setStateName] = useState(initValues)
    const [ anyThing,setAnyThing] = useState('this is use state Hook')
    const [tempText,setTempText] = useState('this is use state Hook')
    const [newUser,setNewUser]=useState({id:0, name:''})
    const [users,setUsers]= useState ([
        {id:1, name:'john'},
        {id:2, name:'doe'},
        {id:3, name:'smith'},
    ])
    const changeText = ()=>{
        setAnyThing(tempText)
    }
    const deleteUser = (userID)=>{
        // confermation
        if(window.confirm('Are you sure you want to delete this user?')){
            const filteredUsers = users.filter((user)=> user.id !== userID)
            setUsers(filteredUsers)
        }
    }
    const updateUser = (userID)=>{
        // when we click on update button then we change the td for name to input field with the old data and 
        // change the update button to save button
        // after that when we click on save button we will update the user data in the users array and change the input field back to td and save button back to update button
        const userToUpdate = users.find((user)=> user.id === userID)
        var inputName = document.createElement("input");
        inputName.value = userToUpdate.name;
        var nameTd = document.getElementById(`name-${userID}`);
        nameTd.innerHTML=''
        nameTd.appendChild(inputName);
        var updateButton = nameTd.nextSibling.firstChild;
        updateButton.innerText = 'save';
 

    }
    return(
        <>
        <input value={tempText} onChange={(e)=>setTempText(e.target.value)} />
        <button onClick={changeText}>save</button>

        <h1>{anyThing}</h1>
        <h1>this is the home componant </h1>
        <form onSubmit={(e)=>{
            e.preventDefault();
            //          old array + new value
            setUsers([...users,newUser])
        }}>
            <input onChange={(e)=>setNewUser({id:users.length+1,name:e.target.value})} type="text" placeholder="name" />
            <button type="submit">add user</button>
        </form>
        <table>
            <thead >
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>update</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody id="table-body">
                {users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td id={`name-${user.id}`}>{user.name}</td>
                        <td><button onClick={()=>{updateUser(user.id)}}>update</button></td>
                        <td><button onClick={()=>deleteUser(user.id)}>delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}