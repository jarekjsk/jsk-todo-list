import { useState, useEffect } from 'react';
import styles from './App.module.css'
import Form from "./components/Form/Form"
import ListElement from "./components/ListElement/ListElement"
import { getSubheading } from './utils/getSubheading';


export function App() {

    const [isFormShown, setIsFormShown] = useState(false)

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    function addItem(newTodoName) {
         
            {setTodos((prevTodos) => [
                ...prevTodos, 
                {
                    name: newTodoName, 
                    done: false, 
                    id: Math.random(),
                },   
        ]);
        setIsFormShown(false);
                
    }};

    function deleteElement(id) {
            
                  setTodos((prevTodos) =>  prevTodos.filter((todo) =>
                        todo.id !== id
                  ))  
                
    };

    function doneElement(id) {
        
                    setTodos((prevTodos) => prevTodos.map((todo) => {
                        if (todo.id !== id) {
                            return todo;
                        }

                        return {
                            ...todo,
                            done: true,
                        }
                    }))
                
    }
   

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
       
        <div className={styles.container}>
            <header className={styles.container__heading}>
                <div className={styles.heading}>
                <h1>Do zrobienia</h1>
                {todos.length > 0 ? <span>{getSubheading(todos.length)}</span> : "" }
                {todos.length === 0 ? <span>Brak zadań</span> : ""}
            </div>
            {!isFormShown && <button onClick={() => setIsFormShown(true)} className={styles.add__button}>+</button>}
            </header>
            {isFormShown && <Form 
                onFormSubmit={(newTodoName) => addItem(newTodoName)}
            />}
            <ul className={styles.list}>
                <hr className={styles.line} />
                {todos.map(({id, name, done}) => (<ListElement key={id} name={name} done={done} 
                onDeleteButtonClick={() => deleteElement(id)}
                onDoneButtonClick={() => doneElement(id)}
 

                />))}
                
            </ul> 
            
        </div>
        
        
    )
}

export default App
