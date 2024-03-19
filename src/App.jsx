import useCrud from './hooks/useCrud'
import './App.css'
import { useEffect, useState } from 'react'
import FormUser from './components/FormUser.jsx'
import UserCard from './components/UserCard.jsx'


function App() {

  const [userEdit, setUserEdit] = useState()
  const BASEURL = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(BASEURL)

  useEffect(() => {
    getUsers('/users/')
  }, [])

  

  return (
    <div className='app'>
      <header className='app_header'>
        <h1 className='_title'>User Crud</h1>
      </header>
      
      <FormUser
        createUser={createUser}
        userEdit={userEdit}
        updateUser={updateUser}
        setUserEdit={setUserEdit}
      />
      <div className='user_container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserEdit={setUserEdit}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
