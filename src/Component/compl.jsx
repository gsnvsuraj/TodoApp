import React, { Component } from 'react';

class Compl extends Component {
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

    changeToTask(id) {
        this.props.changeTask(id);
    }
    
    render() { 
        return (
            <div>
                <div className="p-2">
                    <div>
                    <input className="inp-cbx" id={this.state.id} type="checkbox" style={{display: "none"}} onChange={() => {this.changeToTask(this.state.id)}} checked={true} />
                        <label className="cbx" htmlFor={this.state.id}>
                            <span>
                                <svg width="12px" height="9px" viewBox="0 0 12 9">
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                </svg>
                            </span>
                            <span> {this.state.title} </span>
                        </label>
                        <button className="btn btn-danger btn-sm m-2 p-1 rm-btn" onClick={() => {this.remove(this.state.id)}}>X</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Compl;