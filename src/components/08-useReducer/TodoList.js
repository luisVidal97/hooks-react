import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todo, handleToggle, handleDelete}) => {
    return (
        <ul className='list-group list-group-flush'>
        {
            todo.map( (item, index) => (
                <TodoListItem 
                    key={item.id}
                    item={item} 
                    index={index} 
                    handleToggle={handleToggle}    
                    handleDelete={handleDelete}/>
            ))
        }
        </ul>
    )
}
