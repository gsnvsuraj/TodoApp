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

    remove(id) {
        this.props.handleRemove(id);
    }

    changeToComp(id) {
        this.props.changeComp(id);
    }
    
    render() { 
        return (
            <div>
                <div className="p-2">
                    <div>
                        <input type="checkbox" id={this.state.id} onClick={() => {this.changeToComp(this.state.id)}} />
                        <span className="col-sm-8"> {this.state.title}</span>
                        <button className="btn btn-danger btn-sm m-2 p-1" onClick={() => {this.remove(this.state.id)}}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Task;