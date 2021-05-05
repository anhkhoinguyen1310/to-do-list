import React from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import './App.css';



function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>
          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section className = "todo-card">
        <h2>To Do List</h2>
        <Header />
        <TodoList />
      </section>


    </div>
  )
}

export default App
