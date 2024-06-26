import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import TodoApp from "./component/TodoApp/TodoApp";


function App() {

  return (

    < Router >
      <Header />
      <Routes>
        <Route path="/" Component={TodoApp} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router >
  )

}

export default App;
