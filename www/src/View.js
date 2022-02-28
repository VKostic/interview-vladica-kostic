import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";

export const View = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [item, setItem] = useState([])
    const [addItem, setAddItem] = useState('')

    useEffect (() => {
        fetch(`/api/${id}`)
        .then(response => response.json())
        .then(data => setItem(data))
    }, [id])

    const handleChange = (event) => {
        setAddItem(event.target.value)
    }

    const handleSubmit = () => {
        if (addItem !== ""){
        fetch(`/api/edit/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                content: addItem
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(message => console.log(message))
        navigate('/')
    }
    else {
        navigate('/error')
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="input-field col s6">
                    {item.length > 0 && item.map(data => <input type='text' className="validate" required defaultValue= {data.content} onChange={handleChange} />)}
                    <button className="btn waves-effect waves-light" type='submit' onClick={handleSubmit}><i className="material-icons right">send</i>Edit</button>
                </div>
                <div className="col s5 offset-s5"><Link to='/'>Back to Todo list</Link></div>
            </div>
        </div>
    )
}