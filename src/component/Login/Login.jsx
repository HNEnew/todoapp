import React, { useEffect, useState } from 'react'
import './Login.css'
import LoginForm from './LoginForm/LoginForm'
import SignupForm from './SignupForm/SignupForm'
export default function Login(props) {

  const { style, cancelLogin, setUser } = props
  const [formData, setFormData] = useState({ username: '', password: '', email: '', repassword: '' })
  const [selectedForm, setSelectedForm] = useState('login')

  const changeForm = (value) => {
    setSelectedForm(value)
    setFormData({ username: '', password: '', email: '', repassword: '' })
  }
  const handleChange = event => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const API_URL = "http://54.206.13.36:5050/"

  const handleSignup = async (event) => {
    event.preventDefault()
    let { repassword, ...userdata } = formData
    if (repassword !== userdata.password) return alert("Passwords do not match. Please try again.")
    try {
      const response = await fetch(API_URL + 'api/todoapp/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userdata })
      })
      const result = await response.json()
      if (result.message) alert(result.message)
        if(result.succes) {
          alert(result.succes)
          handleCancelForm({key:'Escape'})
        }
    } catch (error) {
      console.log(error)
    }
  }
  const handleLogin = async (event) => {
    event.preventDefault()
    let { repassword, username, ...userdata } = formData
    try {
      const response = await fetch(API_URL + 'api/todoapp/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userdata }),
        credentials: 'include'
      })
      const result = await response.json()
      if (result.user) {
        setUser(result.user)
        handleCancelForm({key:'Escape'})
      }
      if (result.message) alert(result.message)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCancelForm = (event) => {
    if (event.key === 'Escape' || event.target.id === 'close-btn') {
      cancelLogin(event)
      setFormData({ username: '', password: '', email: '', repassword: '' })
      setSelectedForm('login')
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleCancelForm)
    return () => {
      window.removeEventListener('keydown', handleCancelForm)
    }
  })

  return (
    <div id="login-overlay" className="login-overlay" style={style}>
      <div className="login-form-container">

        {selectedForm === 'login' ? (
          <LoginForm changeForm={changeForm}
            handleChange={handleChange}
            handleLogin={handleLogin}
            handleCancelLogin={handleCancelForm}
            username={formData.email}
            password={formData.password}
          />
        ) : (
          <SignupForm changeForm={changeForm}
            handleChange={handleChange}
            handleSignup={handleSignup}
            handleCancelSignup={handleCancelForm}
            username={formData.username}
            password={formData.password}
            email={formData.email}
            repassword={formData.repassword}
          />
        )}


      </div>
    </div>
  )
}
