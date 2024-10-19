import React from 'react'

export default function LoginForm(props) {

    const { changeForm, handleChange, handleLogin, handleCancelLogin, email, password } = props

    return (
        <form className="login-form" onSubmit={handleLogin} >
            <h2>Login</h2>

            {/* <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={handleChange} value={username} autoComplete='off' required /> */}

            <label >Email : * <p className="errormsg"> required</p></label>
            <input type="email" id="email" name="email" onChange={handleChange} value={email} autoComplete='off' required />

            <label htmlFor="password">Password : * <p className="errormsg"> required</p></label>
            <input type="password" id="password" name="password" onChange={handleChange} value={password} autoComplete='new-password' required />

            <p>Don't have an account ? <span onClick={()=>changeForm('signup')}>Sign up</span></p>
            <button onClick= {event => handleLogin(event)} id="login-btn">Login</button>
            <button onClick={event => handleCancelLogin(event)} type="button" id="close-btn">Close</button>
        </form>
    )
}
