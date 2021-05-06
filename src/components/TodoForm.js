import React from 'react'

class ToDoForm extends React.Component {
    constructor() {
        super()
        this.state={
            newToDo: ''
        }
    }

    handleChanges = e => {
        this.setState({
            newToDo: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addToDo(this.state.newToDo)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.newToDo} type="text" name="item" onChange={this.handleChanges}/>
                <button>Add</button>
            </form>
        )
    }
}

export default ToDoForm;