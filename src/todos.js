import React, { useState, useEffect } from 'react';


const [todos, setTodos] = useState([]);

export default function Todos() {

    useEffect(() => {
        let data = getLocalStorage(todos);
        if (data.length > 0) {
          setTodos(data);
        } else {
          getData(todos)
            .then((data) => {
              setTodos(data);
              setLocalStorage(todos, data);
            })
        }
      }, []);

  return (
    <div>todos here</div>
  )
}
