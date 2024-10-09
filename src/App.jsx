import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import TodoApp from "./component/TodoApp/TodoApp";
import Login from "./component/Login/Login";
import Contact from "./component/Contact/Contact";


function App() {

  const [style, setStyle] = useState({ display: 'none' })
  const [userData, setUserData] = useState({
    list: ['Login to TodoApp and Get started...'], username: 'Login'
  })
  const API_URL = "http://localhost:5050/"

  function setLoginForm() {
    setStyle({ display: 'flex' })
  }

  const getList = async () => {
    fetch(API_URL + "api/todoApp/getList", {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json())
      .then(data => {
        if (data.user?.todolist) {
          setUserData({ list: data.user.todolist, username: data.user.username })
        }
      }).catch(err => console.log(err))
  }

  const handleLogout = async () => {
    fetch(API_URL + 'api/todoApp/logout', {
      method: 'GET',
      credentials: 'include'
    }).then(response =>
      response.json())
      .then(result => {
        if (result.succes) {
          setUserData({
            list: ['Login to TodoApp and Get started...'], username: 'Login'
          })
        }
      })
  }

  function cancelLoginForm(event) {
    if (event.key === 'Escape' || event.target.id === 'close-btn') {
      setStyle({ display: 'none' })
    }
  }

  const setUser = (user) => {
    setUserData({ list: user.todolist, username: user.username })
  }
  useEffect(() => {
    getList()
  }, [])

  return (

    < Router >
      <Login style={style}
        cancelLogin={cancelLoginForm}
        setUser={setUser}
      />
      <Header onClickLogin={setLoginForm} onclickLogout={handleLogout} userData={userData} />
      <Routes>
        <Route path="/" element={<TodoApp userData={userData} getList={getList} setLoginForm={setLoginForm} />} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </Router >

  )

}

export default App;
