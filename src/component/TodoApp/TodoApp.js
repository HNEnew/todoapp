import React, { Component } from 'react'
import "./TodoApp.css"
export default class TodoApp extends Component {

    state = {
        input: '',
        list: ['item 1', 'item 2'],
        editIndex: null,
        editInput: ''
    }

    handlechange = event => {
        this.setState({
            input: event.target.value
        })
    }
    addItem = event => {
        event.preventDefault()
        this.setState({
            list: [...this.state.list, this.state.input],
            input: ''
        })
    }
    handleEditInputChange = event => {
        this.setState({
            editInput: event.target.value
        })
    }
    onEditClick = index => {
        this.setState({
            editInput: this.state.list[index],
            editIndex: index
        })
    }
    editItem = (event, index) => {
        event.preventDefault()
        this.setState({
            list: this.state.list.map((item, i) => {
                return (index === i ? this.state.editInput : item)
            }),
            editInput: '',
            editIndex: null
        })
    }
    cancelEdit = (event, index) => {
        if (event.key === 'Escape') {
            this.setState({
                editInput: '',
                editIndex: null
            })
        }
    }
    deleteItem = key => {
        this.setState({
            list: this.state.list.filter((item, index) => index !== key)
        })
    }

    render() {
        const allItems = this.state.list
        return (
            <div className='todoapp-container'>

                <form className='input-section' onSubmit={this.addItem}>
                    <h1>TodoApp</h1>
                    <input placeholder='Enter item...'
                        onChange={this.handlechange}
                        value={this.state.input}
                    />
                </form>

                <ul>
                    {allItems.map((item, index) => {
                        return (
                            <div key={index}>
                                <li>
                                    {this.state.editIndex === index ? (
                                        <form onSubmit={(event) => this.editItem(event, index)}>
                                            <input onChange={this.handleEditInputChange}
                                                onKeyDown={(event) => this.cancelEdit(event, index)}
                                                value={this.state.editInput} autoFocus
                                                // style={{ display: this.state.display[index] || 'none' }}
                                            />
                                        </form>
                                    ) : (
                                        <>
                                            {item}
                                            <div>
                                                <i className="fa-regular fa-pen-to-square" onClick={() => this.onEditClick(index)} />
                                                <i className="fa-solid fa-trash-can" onClick={() => this.deleteItem(index)} />
                                            </div>
                                        </>
                                    )}
                                </li>
                            </div>
                        )
                    })}
                </ul>

            </div>
        )
    }
}
