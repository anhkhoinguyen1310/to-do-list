import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const selectTodos = (state) => state.todos;

const TodoList = () => {
    const todos = useSelector(selectTodos);
    console.log({ todos })

    return (
        <div className="todo-form">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <TodoListItem key={todo.id} id={todo.id} text={todo.text} />
                ))}
                
            </ul>
            <hr/> 
            <div className="filter-form">
                <div className="actions">
                    <h5>Actions</h5>
                    <button className="mark-completed">Mark All Completed</button>
                    <button className="mark-completed">Clear Completed</button>
                </div>
                <div className="filter-status">
                    <h5>Filter by Status</h5>
                    <button className="status">All </button>
                    <button className="status">On-going </button>
                    <button className="status">Completed </button>

                </div>
                <div className="filter-color">
                    <h5>Filter by Color</h5>
                    <button className="color-filtered">Green</button>
                    <button className="color-filtered">Blue</button>
                    <button className="color-filtered">Orange</button>
                    <button className="color-filtered">Purple</button>
                    <button className="color-filtered">Red</button>

                </div>
            </div>
        </div>
    );
};

export default TodoList;