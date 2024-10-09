import React, { PureComponent } from 'react'
import "./TodoApp.css"
import List from './List/List'
export default class TodoApp extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            input: '',
            list: this.props.userData.list,
            editIndex: null,
            editInput: '',
        }
    }

    componentDidMount() {
        this.props.getList()
    }
    API_URL = "http://localhost:5050/"

    componentDidUpdate(prevProps) {
        if (prevProps.userData.list !== this.props.userData.list) {
            this.setState({ list: this.props.userData.list })
        }
    }

    handlechange = event => {
        this.setState({
            input: event.target.value
        })
    }
    addItem = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(this.API_URL + "api/todoApp/postList", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ item: this.state.input }),
                credentials: 'include'
            })
            const result = await response.json()
            if (result.succes) {
                this.setState({
                    list: [...this.state.list, this.state.input],
                    input: ''
                })
            } else if (result.message === 'Access denied') {
                alert(result.message)
                this.props.setLoginForm()
            }
        } catch (error) {
            console.log(error)
        }
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
    editItem = async (event, index) => {
        event.preventDefault()
        const response = await fetch(this.API_URL + 'api/todoApp/editList', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item: this.state.editInput, itemIndex: index }),
            credentials: 'include'
        })
        const result = await response.json()
        this.setState({
            list: this.state.list.map((item, i) => {
                return (index === i ? this.state.editInput : item)
            }),
            editInput: '',
            editIndex: null
        })
        if(result.message === 'Access denied'){
            alert(result.message)
            this.props.setLoginForm()
        }
    }
    cancelEdit = (event, index) => {
        if (event.key === 'Escape') {
            this.setState({
                editInput: '',
                editIndex: null
            })
        }
    }
    deleteItem = async (key) => {
        try {
            const response = await fetch(this.API_URL + `api/todoApp/deleteList/${key}`, {
                method: 'DELETE',
                credentials: 'include'
            })
            const result = await response.json()
            if (result.succes) {
                this.setState({
                    list: this.state.list.filter((item, index) => index !== key)
                })
            } else if (result.message === 'Access denied') {
                alert(result.message)
                this.props.setLoginForm()
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {

        const { input, list, editIndex, editInput } = this.state
        return (
            <div className='todoapp-container'>
                <form className='input-section' onSubmit={this.addItem}>
                    <h1>TodoApp</h1>
                    <input placeholder='Enter item ...'
                        onChange={this.handlechange}
                        value={input}
                    />
                </form>
                <List list={list}
                    editIndex={editIndex}
                    editInput={editInput}
                    editItem={this.editItem}
                    onEditClick={this.onEditClick}
                    cancelEdit={this.cancelEdit}
                    deleteItem={this.deleteItem}
                    handleEditInputChange={this.handleEditInputChange}
                />
            </div>
        )
    }
}

