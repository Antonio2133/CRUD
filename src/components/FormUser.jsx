import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/FormUser.css'

const FormUser = ({createUser, userEdit, updateUser, setUserEdit, formIsClose, setFormIsClose}) => {

  const { handleSubmit, register, reset } = useForm()

  useEffect(() => {
    reset(userEdit)
  }, [userEdit])

  const submit = data => {
    if(userEdit){
      updateUser('/users/', userEdit.id, data)
      setUserEdit()
    }else{
      createUser('/users/', data)
    }
    setFormIsClose(true)
    reset({
      email: '',
      password: '',
      firt_name: '',
      last_name: '',
      birthday: ''
    })
  }

  const handleFormClose = () => {
    setFormIsClose(true)
    reset({
      email: '',
      password: '',
      firt_name: '',
      last_name: '',
      birthday: ''
    })
    setUserEdit()
  }

  return (
    <div className={`form_container ${formIsClose && 'form_close'}`}>
      <form className='form' onSubmit={handleSubmit(submit)}>
        <header className='form_header'>
          <h2 className='form_title'>User Form: </h2>
          <div onClick={handleFormClose} className='form_exit'>X</div>
        </header>
        <label className='form_label'>
          <span className='form_field'>Email</span>
          <input className='form_input' {...register('email')} type="email" />
        </label>
        <label className='form_label'>
          <span className='form_field'>Password</span>
          <input className='form_input' {...register('password')} type="password" />
        </label>
        <label className='form_label'>
          <span className='form_field'>First Name</span>
          <input className='form_input' {...register('first_name')} type="text" />
        </label>
        <label className='form_label'>
          <span className='form_field'>Last Name</span>
          <input className='form_input' {...register('last_name')} type="text" />
        </label>
        <label className='form_label'>
          <span className='form_field'>Birthday</span>
          <input className='form_input' {...register('birthday')} type="date" />
        </label>
        <button className='form_btn'>Submit</button>
      </form>
    </div>
  )
}

export default FormUser