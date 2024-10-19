import React, { PureComponent } from 'react'

export default class List extends PureComponent {





    render() {

        const { list, editIndex, editInput, editItem, onEditClick, cancelEdit, deleteItem, handleEditInputChange } = this.props

        return (

            <ul>
                {list.map((item, index) => {
                    return (
                        <div key={index}>
                            <li>
                                {editIndex === index ? (
                                    <form onSubmit={(event) => editItem(event, index)}>
                                        <input onChange={(event) => handleEditInputChange(event)}
                                            onKeyDown={(event) => cancelEdit(event, index)}
                                            value={editInput} autoFocus
                                        />
                                    </form>
                                ) : (
                                    <>
                                        {/* <div> */}
                                            {item}
                                        {/* </div> */}
                                        <div>
                                            <i className="fa-regular fa-pen-to-square" onClick={() => onEditClick(index)} />
                                            <i className="fa-solid fa-trash-can" onClick={() => deleteItem(index)} />
                                        </div>
                                    </>
                                )}
                            </li>
                        </div>
                    )
                })}
            </ul>
        )
    }
}
