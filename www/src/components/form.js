import React from 'react';

export const Form = ({ userInput, onFormChange, onFormSubmit}) => {

    const handleChange = (event) => {
        onFormChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit()
    }

    return(
        <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type='text' required value={userInput} onChange={handleChange} className="validate"></input>
                            <button className="btn waves-effect waves-light" type='submit'><i className="material-icons right">send</i>Add new task</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}