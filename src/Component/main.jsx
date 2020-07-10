import React, { Component } from 'react';
import myData from './data.json';
import Task from './task';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            min: 10000,
            max: 99999
        };

        this.handleSub = this.handleSub.bind(this);
    }

    componentDidMount() {
        this.setState({
            tasks: myData.tasks
        });
    }

    handleSub(event) {
        let varTasks = this.state.tasks;
        let values = document.getElementById("todoIn").value;
        let rand = Math.floor(Math.random()*(this.state.max-this.state.min+1)+this.state.min);

        let task = {"title": values, "cmpld":false, "id":rand };
        varTasks.push(task);

        this.setState({tasks:varTasks});
        document.getElementById("todoIn").value = "";
        event.preventDefault();
    }

    handleRemove(id) {
        const rem = this.state.tasks.filter((todo) => 
        {if(todo.id !== id) return todo;});

        this.setState({tasks:rem});
    }

    downloadTxtFile = () => {
        let strings = "Todo Tasks-\n";
        this.state.tasks.forEach(element => {
            strings += element.title + "\n";
        });

        const element = document.createElement("a");
        const file = new Blob([strings], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "todo.txt";
        document.body.appendChild(element);
        element.click();
    }

    render() { 
        return (
            <div>
                <div>
                    <h2 className="m-4 font-weight-bolder">Todo Tasks</h2>
                    <div className="m-1 lead font-weight-bold">
                        {this.state.tasks.length === 0?
                            <div>No tasks present</div> : null}
                        {this.state.tasks.map(({title, status, id}) => <Task title={title} status={status} id={id}
                        key={id} handleRemove={() => this.handleRemove(id)} />)}
                    </div>
                </div>
                <br /><br /><br />

                <div>
                    <h3 className="font-weight-bold">
                        Add a Todo
                    </h3>

                    <div>
                        <form onSubmit={this.handleSub}>
                            <div className="">
                                <input type="text" id="todoIn" name="todo" className="" />
                                <input type="submit" value="Add" className="btn btn-primary btn-sm m-2 font-weight-bold" />
                            </div>
                        </form>
                    </div><br /><br />

                    <div>
                        <button className="btn btn-success btn-lg font-weight-bolder" onClick={this.downloadTxtFile}>Download TXT</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Main;