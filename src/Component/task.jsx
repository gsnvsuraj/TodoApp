import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            status: this.props.status,
            id: this.props.id
        }
    }

    changeCompld(e) {
        console.log(e.target);
        if (e.target.value === true)
            console.log(e.target.value);
    }

    remove(id) {
        this.props.handleRemove(id);
    }
    
    render() { 
        return (
            <div>
                <div className="p-2">
                    <div>
                        <span>{this.state.title}</span>
                        <button className="btn btn-danger btn-sm m-2 p-1" onClick={() => {this.remove(this.state.id)}}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Task;