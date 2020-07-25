import React, { Component } from 'react';
import Task from './task';
import Compl from './compl';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            comp: [],
            min: 10000,
            max: 99999
        };

        this.handleSub = this.handleSub.bind(this);
    }

    refresh = () => {
        document.getElementById("todoIn").focus();

        this.setState({
            tasks: [],
            comp: []
        });
    }

    componentDidMount() {
        this.refresh();
    }

    handleSub(event) {
        let varTasks = this.state.tasks;
        let values = document.getElementById("todoIn").value;
        let rand = Math.floor(Math.random()*(this.state.max-this.state.min+1)+this.state.min);

        let task = {"title": values, "cmpld":false, "id":rand };
        varTasks.push(task);

        this.setState({tasks:varTasks});
        document.getElementById("todoIn").value = "";
        document.getElementById("todoAdd").disabled = true;
        event.preventDefault();
    }

    handleRemove(id) {
        const rem = this.state.tasks.filter((todo) => 
        {if(todo.id !== id) return todo;});

        const com = this.state.comp.filter((todo) => 
        {if(todo.id !== id) return todo;});

        this.setState({
            tasks: rem,
            comp: com
        });
    }

    changeComp(id) {
        const rem = this.state.tasks.filter((todo) => 
        {if(todo.id !== id) return todo;});

        const com = this.state.tasks.filter((todo) => 
        {if(todo.id === id) return todo;});
        const completed = [...com, ...this.state.comp];

        this.setState({
            tasks: rem,
            comp: completed
        });
    }

    changeTask(id) {
        const rem = this.state.comp.filter((todo) => 
        {if(todo.id === id) return todo;});
        const remTask = [...this.state.tasks, ...rem];

        const com = this.state.comp.filter((todo) => 
        {if(todo.id !== id) return todo;});

        this.setState({
            tasks: remTask,
            comp: com
        });
    }

    validateInp() {
        const value = document.getElementById("todoIn").value.trim();

        if (value)
            document.getElementById("todoAdd").disabled = false;
        else
            document.getElementById("todoAdd").disabled = true;
    }

    downloadTxtFile = () => {
        let strings = "";

        if (this.state.tasks.length > 0) {
            strings += "\nTodo Tasks-\n";
            this.state.tasks.forEach(element => {
                strings += element.title + "\n";
            });
        }

        if (this.state.comp.length > 0) {
            strings += "\nCompleted Tasks-\n";
            this.state.comp.forEach(element => {
                strings += element.title + "\n";
            });
        }

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
                        key={id} handleRemove={() => this.handleRemove(id)} changeComp={() => this.changeComp(id)} />)}
                    </div>
                </div>
                <br /><br />

                <div>
                    <h2 className="m-4 font-weight-bolder">Completed Tasks</h2>
                    <div className="m-1 lead font-weight-bold">
                        {this.state.comp.length === 0?
                            <div>No completed tasks present</div> : null}
                        {this.state.comp.map(({title, status, id}) => <Compl title={title} status={status} id={id}
                        key={id} handleRemove={() => this.handleRemove(id)} changeTask={() => this.changeTask(id)} />)}
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
                                <input type="text" id="todoIn" name="todo" className="" onInput={this.validateInp} />
                                <input type="submit" id="todoAdd" value="Add" className="btn btn-primary btn-sm m-2 font-weight-bold" disabled={true} />
                            </div>
                        </form>
                    </div><br /><br />

                    <div>
                        <button className="btn btn-success btn-lg font-weight-bolder m-2" onClick={this.downloadTxtFile}>Download TXT</button>
                        <button className="btn btn-warning btn-lg font-weight-bolder text-white m-2" onClick={this.refresh}>Clear All</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Main;