import React, { Component } from 'react'

export default class TodoItem extends Component {
    
    render() {
        const {title, handleDelete, handleEdit} =this.props;
        return (
            <li className='list-group-item text-capitalize d-flex 
            justify-content-between my-2'>
                <h6>{title}</h6>
                <div className='todo-icon'>
                    <span>
                    <button type='submit' className='btn btn-block btn-primary' onClick={handleEdit}>Edit</button>
                    <button type='submit' className='btn btn-block btn-danger' onClick={handleDelete}>Delete</button>
                    </span>
                </div>
            </li>
        )
    }
}
