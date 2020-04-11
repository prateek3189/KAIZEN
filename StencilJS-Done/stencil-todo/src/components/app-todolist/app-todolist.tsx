import { Component, h, State, Method } from '@stencil/core';
import { Listen } from '@stencil/core';
import mockData from "../../mocks/mock-data.js";

@Component ({
    tag: 'app-todolist',
    styleUrl: 'app-todolist.scss'
})

export class AppToDoList {
    @State() toDoList:any;

    // VALID: using async
    @Method()
    async myMethod() {
    return 42;
    }

    // VALID: using Promise.resolve()
    @Method()
    myMethod2() {
    return Promise.resolve(42);
    }

    // VALID: even it returns nothing, it needs to be async
    @Method()
    async myMethod3() {
    console.log(42);
    }

    @Listen('addItem')
    addItemHandler(event: UIEvent) {
        const newID: number = this.toDoList[this.toDoList.length - 1].id + 1;
        const newItem = {
            id: newID,
            name: event.detail,
            completed: false
        }
        this.toDoList = [...this.toDoList, newItem];
    }

    @Listen('todoCompleted')
    todoCompletedHandler(event: UIEvent) {
        const itemIndex = this.toDoList.findIndex((item: any) => { return item.id === event.detail; });
        this.toDoList[itemIndex].completed = true;
        this.toDoList = [...this.toDoList];
    }

    componentWillLoad() {
        setTimeout(() => {
            this.toDoList = mockData.getToDoItems;
        }, 0);
        console.log(this.myMethod());
        console.log(this.myMethod2());
        console.log(this.myMethod3());
    }

    render () {
        return (<div class="main-container">
            <div class="todo-list">
                <app-add-item></app-add-item>
                {this.toDoList ? 
                    <div class="todo-list">
                        <ul>
                            {this.renderToDoList()}
                        </ul>
                    </div> : <app-loader></app-loader>}
            </div>
            
        </div>);
    }

    renderToDoList() {
        let listData = [];
        this.toDoList && this.toDoList.map((item: any) => {
            listData.push(<app-list-item 
                itemId={item.id}
                itemName={item.name}
                completed={item.completed}></app-list-item>);
        });
        return listData;
    }
}