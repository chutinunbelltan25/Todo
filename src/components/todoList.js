import React, { Component } from 'react'
import TodoItem from './todoItem'

export default class TodoList extends Component {
  render() {
    const {items} = this.props
    return (
      <div>
        <ul className='list-group my-5'>
          <h1 className='text-capitalize text-center'>Hello</h1>
          <TodoItem />
          <button
            type='button'
            className='btn btn-danger btn-block text-capitalize mt-5'
          >
            clear list
          </button>
        </ul>
      </div>
    )
  }
}
