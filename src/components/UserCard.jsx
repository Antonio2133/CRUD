import '../components/styles/UserCard.css'

const UserCard = ({user, deleteUser, setUserEdit, handleOpenForm}) => {

  const handleDelete = () => {
    deleteUser('/users/', user.id)
  }

  const handleEdit = () => {
    setUserEdit(user)
    handleOpenForm()
  }

  return (
    <div className='card_container'>
    <article className="card">
      <h2 className="card_label">{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="card_info">
        <li className="info"><span>Email</span><span>{user.email}</span></li>
        <li className="info"><span>Birthday</span><span>{user.birthday}</span></li>
      </ul>
      <div className='card_btn_container'>
      <button className='card_btn_delete' src='../img/contact_form.png' onClick={handleDelete}>Delete</button>
      <button className='card_btn_edit' onClick={handleEdit}>Edit</button>
      </div>
    </article>
    </div>
  )
}

export default UserCard