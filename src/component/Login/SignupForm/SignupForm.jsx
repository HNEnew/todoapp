import React from 'react'

export default function SignupForm(props) {

    const { changeForm, handleChange, handleSignup, handleCancelSignup, username, password, email, repassword } = props

    return (
        <form className="login-form" onSubmit={handleSignup} >
            <h2>Sign up</h2>

            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={handleChange} value={username} autoComplete='off' required />

            <label htmlFor="email">email:</label>
            <input type="email" id="email" name="email" onChange={handleChange} value={email} autoComplete='off' required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={handleChange} value={password} autoComplete='new-password' required />

            <label htmlFor="password">Repeat Password:</label>
            <input type="password" name="repassword" onChange={handleChange} value={repassword} autoComplete='new-password' required />

            <p>Already have an account ? <span onClick={() => changeForm('login')}>Login</span></p>
            <button onClick={handleSignup} id="login-btn">Sign Up</button>
            <button onClick={event => handleCancelSignup(event)} type="button" id="close-btn">Close</button>
        </form>
    )
}
