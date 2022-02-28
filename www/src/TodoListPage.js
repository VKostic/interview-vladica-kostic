import React, { useState, useEffect } from 'react';
import { Form } from './components/form';
import { Display } from './components/display';

export const TodoListPage = () => {

    const [item, setItem] = useState([])
    const [addItem, setAddItem] = useState('')

    useEffect(() => {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setItem(data))
    }, [])

    const handleFormChange = (inputValue) => {
        setAddItem(inputValue)
    }

    const handleFormSubmit = () => {
        fetch('/api/new', {
            method: 'POST',
            body: JSON.stringify({
                content: addItem
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(message => console.log(message))
        setAddItem('')
        getLatestItems()
    }

    const getLatestItems = () => {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setItem(data))
    }

    return(
        <>
            <Form userInput={addItem} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
            <Display itemList={item} />
        </>
    )
}