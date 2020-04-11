import { Component, h, Prop, State, Watch } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import mockData from "../../mocks/mock-data.js";

@Component ({
    tag: 'app-details',
    styleUrl: 'app-details.scss'
})

export class AppDetails {
    @Prop() match: MatchResults;

    @State() itemData:any = null;
    @State() itemId:number = Number(this.match.params.id);
    @State() updated:Boolean = false;

    @Watch('updated')

    watchHandler(newValue: boolean, oldValue: boolean) {
        console.log(oldValue, newValue);
    }

    componentDidRender() {
        this.itemData = mockData.getToDoItems.find(item => {
            return item.id === this.itemId;
        });
    }

    render () {
        return (<div class="main-container">
            <div class="todo-details">
                <h4>Edit To Do Item</h4>
                {this.itemData ? 
                    <form action="">
                        <div class="form-filed">
                            <label htmlFor="todo-item">To do:</label>
                            <input type="text" name="todo-item" value={this.itemData.name}/>
                        </div>
                        <div class="form-filed">
                            <button type="button" onClick={this.onUpdate.bind(this)}>Update</button>
                            <button type="reset">Cancel</button>
                            <stencil-route-link url='/'>
                                <a href="javascript:void(0)">Back</a>
                            </stencil-route-link>
                        </div>
                    </form> : <app-loader></app-loader>}
            </div>
        </div>);
    }

    onUpdate() {
        this.updated = !!event;
    }
}