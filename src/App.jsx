import useCrud from './hooks/useCrud'
import './App.css'
import { useEffect, useState } from 'react'
import FormUser from './components/FormUser.jsx'
import UserCard from './components/UserCard.jsx'


function App() {

  const [userEdit, setUserEdit] = useState()
  const [formIsClose, setFormIsClose] = useState(true)
  const BASEURL = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(BASEURL)

  useEffect(() => {
    getUsers('/users/')
  }, [])

  const handleOpenForm = () => {
    setFormIsClose(false)
  }

  return (
    <div className='app'>
      <header className='app_header'>
        <h1 className='_title'>User Crud</h1>
        <button onClick={handleOpenForm} className='form_btn'>Create new user</button>
      </header>
      
      <FormUser
        createUser={createUser}
        userEdit={userEdit}
        updateUser={updateUser}
        setUserEdit={setUserEdit}
        formIsClose={formIsClose}
        setFormIsClose={setFormIsClose}
      />
      <div className='user_container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserEdit={setUserEdit}
              handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
