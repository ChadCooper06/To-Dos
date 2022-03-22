import React from "react";

export default function Paper() {
    return(
        <div className="toDoPage">
            <h1 className="title">To Do List</h1>
            <input className="inputBox" type='text'></input>
            <div className="tasks">
                <ul>
                    <li>create my app</li>
                    <li>make it work</li>
                    <li>try not to break it</li>
                </ul>
            </div>
            <button className="all">All</button>
            <button className="active">Active</button>
            <button className="done">Done</button>
            <div className="counter">displays left to do</div>
            <button className="clearAll">Clear All</button>
        </div>
    )
};