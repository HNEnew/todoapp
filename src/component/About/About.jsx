import React from 'react'
import './About.css'
export default function About() {
  return (
    <div>

      <div className='about-container'>
        <h1 className='about-header' >About TodoApp</h1>
        <p>
          Welcome to TodoApp, a project born out of my passion for learning and building practical applications.
        </p>
        <h3>Journey of Development</h3>
        <p> <span>Started with React</span> : The journey began with React, a powerful JavaScript library for building user interfaces.
          I focused on creating a dynamic and responsive front end to manage daily tasks effectively.</p>
        <p><span>Incorporating Node and Express</span> : To handle the backend processes and enable smooth communication between the client and server, I integrated Node.js and Express.js.
          This transition allowed me to build a robust server to handle API requests, manage routes, and ensure a seamless flow of data.</p>
        <p><span>Integrating MongoDB</span> : To store and manage the data efficiently, I included MongoDB, a NoSQL database.
          This addition provided a flexible and scalable solution for data storage, enabling users to keep track of their tasks effortlessly.</p>
          <p><span>Adding User Accounts and Authentication</span> : I implemented login and signup functionality with JWT authentication,
           ensuring secure access for users to manage their personalized task lists.</p>
        
        <h3>Continuous Upgrades</h3>
        <p>The development of TodoApp is an ongoing process. I am continuously learning and adding new features to enhance its functionality.
          From basic task management to more advanced features, each update aims to improve the user experience and add value to the application.
          Some of the recent upgrades include :
          <br /><br />
          <span>Responsive Design</span> : I used media queries to make the app fully responsive, ensuring a seamless user experience across all devices.
          <br /><br />
          <span>User Feedback and Contact Section</span> : I'm adding a contact section to allow users to share their thoughts and suggestions on improving the app.
          <br /><br />
          <span>Task Notification Feature</span> : An upcoming feature will include setting time-based notifications to help users manage their tasks more efficiently.
          <br /><br /><br />
          Thank you for exploring TodoApp. Your feedback and suggestions are always welcome as they help in making this app even better. Happy task managing!

        </p>
      </div>

    </div>
  )
}
