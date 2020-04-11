import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component ({
    tag: 'app-add-item',
    styleUrl: 'app-add-item.scss'
})

export class AppAddItem {
    @State() itemName: string = '';

    @Event() addItem: EventEmitter;

    render () {
        return (<div class="add-todo">
                    <form action="" onSubmit={this.onFormSubmit.bind(this)}>
                        <label htmlFor="todo-name">Add Item:</label>
                        <input type="text" name="todo-name" onKeyUp={this.onInputChange.bind(this)} value={this.itemName}/>
                        <button>Add</button>
                    </form>                    
                </div>);
    }

    onInputChange(event: any) {
        this.itemName = event.target.value;
    }

    onFormSubmit(event: UIEvent) {
        event.preventDefault()
        if(this.itemName) {
            this.addItem.emit(this.itemName);
            this.itemName = '';
        }
    }
}