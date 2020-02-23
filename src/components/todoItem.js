import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <li className='list-group-item text-capitalize d-flex 
            justify-content-between my-2'>
                <h6>text</h6>
                <div className='todo-icon'>
                    <span>
                    <button type='submit' className='btn btn-block btn-primary'>Edit</button>
                    <button type='submit' className='btn btn-block btn-danger'>Delete</button>
                    </span>
                </div>
            </li>
        )
    }
}
